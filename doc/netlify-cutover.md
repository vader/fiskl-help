# Moving the help site from Netlify to AWS

The ordered plan. Steps 1–7 bring the **test** site up and change nothing about
the live site — `help.fiskl.com` keeps being served by Netlify throughout.
Production is not touched until step 8, and the DNS switch in step 11 is the
only irreversible-feeling moment (it is not really: see Rollback).

Read [infrastructure.md](./infrastructure.md) first for what is being built.

Nothing in this repository writes a DNS record. Steps that need one are marked
**[DNS]** and go to whoever owns the `fiskl.com` hosted zone in the stage
account.

## Before you start

Check these, because two of them have caught people out:

- [ ] `aws sts get-caller-identity --profile stage-admin` returns **355369890944**
- [ ] `aws sts get-caller-identity --profile prod-release` returns **396752440154**
- [ ] No `FISKL_AWS_PROFILE` left over in your shell from marketing-site work
- [ ] `pnpm` is installed and `pnpm run build` succeeds locally
- [ ] Both accounts are CDK-bootstrapped for us-east-1:
      `scripts/infra.sh test bootstrap` and `scripts/infra.sh prod bootstrap`.
      Idempotent, so run both. The stage account was already bootstrapped by the
      marketing-site work; the prod account was not, because the marketing site
      has not been cut over yet — so this bites on the first production command
      and nowhere earlier

## Test environment

### 1. Create the Basic Auth credential

The stack refuses to synthesise without it.

```bash
PW=$(LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 20)
aws ssm put-parameter --profile stage-admin --region us-east-1 \
  --name /fiskl-help/test/basic-auth \
  --description "HTTP Basic Auth for the test help site (user:password). Obfuscation only." \
  --type SecureString --value "fiskl:${PW}"
echo "credential: fiskl:${PW}"
```

Put it in the password manager now, not later.

### 2. Deploy the certificate stack

This **blocks** in `CREATE_IN_PROGRESS` until the validation record exists.
Leave it running in its own terminal.

```bash
scripts/infra.sh test deploy-cert
```

### 3. **[DNS]** Add the ACM validation record

In another terminal:

```bash
scripts/cert-dns.sh test
```

Hand the printed CNAME over. Leave it in place afterwards so ACM can auto-renew.
On the marketing site this waited 79 minutes, all of it on a human.

### 4. Deploy the site stack

Do not wait for the certificate. With no certificate in SSM the distribution
comes up on its `*.cloudfront.net` name, which is enough to test everything
except the domain.

```bash
scripts/infra.sh test deploy
```

Note the `DistributionDomainName` output.

### 5. Publish the docs

```bash
pnpm run deploy:test
```

### 6. Verify — properly

```bash
pnpm run verify:test
```

Do not just load the homepage; it works even when the edge function is
completely broken. The checks that matter are the **nested route** (proves the
rewrite is running) and the **unknown URL returning 404 rather than 403** (proves
both error responses are mapped). `verify.sh` covers those plus the cache
headers, the noindex layers, search, the feed and the sitemap host.

Before the domain is attached, point it at the distribution directly:

```bash
D=https://<distribution>.cloudfront.net
CRED=$(aws ssm get-parameter --profile stage-admin --region us-east-1 \
  --name /fiskl-help/test/basic-auth --with-decryption \
  --query Parameter.Value --output text)
curl -s -o /dev/null -w '%{http_code}\n' "$D/"                                  # 401
curl -s -u "$CRED" -o /dev/null -w '%{http_code}\n' "$D/getting-started/importing-data"  # 200
curl -s -u "$CRED" -o /dev/null -w '%{http_code}\n' "$D/definitely-not-a-page"  # 404
```

### 7. **[DNS]** Point test-help.fiskl.com at the distribution, then reattach

Once the certificate shows `ISSUED`, hand over a record for
`test-help.fiskl.com` → the distribution domain (a CNAME is fine; it is not an
apex). Then re-run the site deploy so the distribution picks up the now-issued
certificate and serves the custom domain:

```bash
scripts/infra.sh test deploy
pnpm run verify:test
```

**Stop here and review the test site properly.** This is the whole point of
building it first: click through the docs, run a few searches, check the Atlas
section and `/updates`, look at a page on a phone. Everything from here on
touches production.

## Production

### 8. Deploy the production infrastructure

Same two stacks, different account. Nothing is serving traffic yet — the
distribution has no alias and `help.fiskl.com` still resolves to Netlify.

The prod account needs bootstrapping first. Nothing has ever done it there,
because the marketing site's production has not been cut over, so this is the
first CDK deploy that account has seen:

```bash
scripts/infra.sh prod bootstrap       # one-time, ~2 min
scripts/infra.sh prod deploy-cert     # blocks
scripts/cert-dns.sh prod              # in another terminal → [DNS]
scripts/infra.sh prod deploy
```

`scripts/infra.sh` refuses every other action until bootstrap has run, so this
cannot be skipped silently.

There is no Basic Auth credential to create: production is public.

### 9. Publish to production, while Netlify still serves

```bash
git checkout main && git pull
pnpm run deploy:prod
```

This uploads the real production build — `Allow: /` in robots.txt, production
canonicals and sitemap — but nobody reaches it yet.

### 10. Verify production on the distribution domain

Check the real content against the CloudFront domain **before** any DNS change:

```bash
D=https://<prod-distribution>.cloudfront.net
curl -s -o /dev/null -w '%{http_code}\n' "$D/getting-started/importing-data"   # 200, no auth
curl -s -o /dev/null -w '%{http_code}\n' "$D/definitely-not-a-page"            # 404
curl -s "$D/robots.txt"                                                        # Allow: /
curl -sI "$D/" | grep -i x-robots-tag                                          # must be ABSENT
curl -s "$D/sitemap.xml" | head -c 200                                         # help.fiskl.com
```

`X-Robots-Tag` being absent and `robots.txt` saying `Allow: /` are the two that
matter. Shipping the test site's noindex to production would quietly
de-index the docs.

Compare a few pages against the live Netlify site side by side. Check that a
handful of URLs from Google Search Console still resolve.

### 11. **[DNS]** The cutover

Two changes, in this order:

1. Confirm `help.fiskl.com` is listed as an alias on the production
   distribution. `scripts/infra.sh prod deploy` does this once the certificate
   has issued. CloudFront returns an error for a hostname it does not recognise,
   so the alias must exist **before** DNS points at it.
2. Change `help.fiskl.com` in the `fiskl.com` hosted zone from Netlify to the
   CloudFront distribution domain.

Lower the record's TTL a day beforehand if you want a fast rollback window.

Then:

```bash
pnpm run verify:prod
```

### 12. After the cutover

- [ ] Watch for 404s and check `x-cache` is `Hit`, not `RefreshHit`
- [ ] Submit the sitemap in Search Console and confirm no canonical changes
      (there should be none — no URL moved)
- [ ] Set the CloudFront pricing plan on both distributions; CDK cannot do it
- [ ] Put a budget alert on both accounts, addressed to someone who reads it
- [ ] Only once you are satisfied: turn off the Netlify site, then delete
      `netlify.toml` and `static/_headers`

Leave `netlify.toml` and `static/_headers` in the repository until Netlify is
switched off. `_headers` is what sets `Access-Control-Allow-Origin` on the RSS
feed there; on CloudFront that is handled by the response headers policy, and
the file itself returns 404 rather than being served.

## Rollback

**Before DNS changes**, there is nothing to roll back: Netlify is still serving
the live site.

**After DNS changes**, point `help.fiskl.com` back at Netlify. Keep the Netlify
site deployed and untouched until you are confident — that is the actual
rollback plan, and it costs nothing to keep for a fortnight.

**For a bad deploy** (not a bad migration), rollback is git:

```bash
git revert --no-edit <bad-commit>
git push origin main
pnpm run deploy:prod
```

## Expected timings

Measured on the marketing site's build-out, not this one, so treat them as
rough:

| Operation | Time |
|---|---|
| `cdk bootstrap` | ~2 min, once per account |
| ACM DNS validation | Minutes to hours — all of it waiting on a human |
| Distribution creation | ~3 min (AWS documents 5–15) |
| Distribution update | 1–3 min |
| Invalidation | < 1 min |
| Full site deploy | ~2 min including the build |

## What this migration deliberately does not change

- **No URL moves.** All 281 canonical URLs stay exactly as they are. See the URL
  section of infrastructure.md for why, and what the alternative would have cost.
- **No shared CloudFront distribution with the marketing site.** CloudFront
  picks the origin from the URL path before the edge function runs and cannot
  route by hostname, so sharing would have needed either one bucket for both
  sites or Lambda@Edge. It would also have saved nothing: CloudFront has no
  per-distribution fixed charge. What *is* shared is the pattern — the CDK app,
  the scripts and the edge function are the marketing site's, with different
  names.
- **`onBrokenLinks` stays `warn`.** The runbook recommends `throw`. Flipping it
  is worth doing, but it is a content cleanup that could block a deploy, so it
  does not belong in an infrastructure migration.
- **i18n stays off.** There are `i18n/es` and `i18n/fr` directories and a locale
  dropdown in the navbar, but no `i18n` block in `docusaurus.config.ts`, so only
  English is built. That was true on Netlify and is still true here.
