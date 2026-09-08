# Help site infrastructure

The help site is a static Docusaurus build served from S3 through CloudFront.
There is no VPC, no load balancer, no container, and nothing running at request
time. This document is how it works and how to operate it. For moving off
Netlify, see [netlify-cutover.md](./netlify-cutover.md).

The design follows the marketing site (`fiskl/website`) closely enough that the
CDK app, the deploy scripts and the edge function are recognisably the same
files. Where this repository differs, it is called out below and in the code.

## Where this repository came from

History starts in September 2026. The help site previously lived in GitHub
(`fiskl-accounting/fiskl-help`), because an experiment with a git-backed CMS
needed it there and Netlify deployed from it. The CMS experiment was abandoned
and Netlify was replaced by the AWS setup described here, which left the
repository in GitHub for no remaining reason.

It was re-homed to Bitbucket alongside `fiskl/website` as a fresh repository
seeded from the then-current `main`, with no history carried across. The GitHub
repository is archived read-only and remains the record of everything before
that point.

## Environments

| | Test | Production |
|---|---|---|
| URL | https://test-help.fiskl.com | https://help.fiskl.com |
| AWS account | 355369890944 | 396752440154 |
| AWS profile | `stage-admin` | `prod-release` |
| Region | us-east-1 | us-east-1 |
| Indexable | No — `noindex` header and `Disallow: /` | Yes |
| Password | Yes, HTTP Basic Auth | No |
| Bucket retained on stack delete | No | Yes |

Everything lives in **us-east-1**. ACM certificates for CloudFront must, and
keeping the bucket alongside avoids a cross-region CDK app for no benefit — the
origin region barely matters for a cached static site.

DNS for `fiskl.com` is in Route 53 in the **stage** account. Every DNS change is
made by hand by the CTO; nothing in this repository writes a DNS record. Note
that production's distribution lives in the *prod* account while its DNS record
lives in the *stage* account. That is fine — a CloudFront alias target is
global — but it means two accounts are involved in bringing production up.

## Layout

| Path | What it is |
|---|---|
| `infra/environments.json` | Account ids, hostnames, per-environment flags. Read by both the CDK app and the shell scripts |
| `infra/lib/help-site-stack.ts` | Bucket, OAC, distribution, headers, SSM parameters, IAM |
| `infra/lib/certificate-stack.ts` | The ACM certificate, separately, because DNS validation blocks |
| `infra/functions/viewer-request.js` | The edge function: auth gate + directory rewrite |
| `infra/functions/viewer-request.test.js` | Runs that function over the real build and checks every route resolves |
| `scripts/lib.sh` | Profile resolution, the account assertion, SSM reads |
| `scripts/infra.sh` | Deploy the infrastructure |
| `scripts/deploy.sh` | Build and publish the site |
| `scripts/verify.sh` | Check a deployed environment end to end |
| `scripts/cert-dns.sh` | Print the DNS record ACM is waiting for |
| `bitbucket-pipelines.yml` | Build every pull request; manual deploys to test and production |

## Everyday commands

```bash
pnpm run deploy:test     # build this branch and publish it to the test site
pnpm run verify:test     # check the test site is serving correctly
pnpm run test:routing    # check the edge function matches the current build
```

Production is the same, with `:prod`, and refuses to run unless you are on a
clean `main` that matches `origin/main` and you type `DEPLOY PROD`.

## How a request is served

1. CloudFront matches the request to its single cache behaviour.
2. The **viewer-request function** runs. On test it demands Basic Auth. Then it
   rewrites the URL for the S3 origin.
3. On a cache hit, CloudFront answers from the edge and the origin is never
   touched.
4. On a miss it fetches from the private bucket over Origin Access Control.
5. If the object does not exist, S3 returns **403** — not 404, because a private
   bucket behind OAC masks the underlying 404 — and CloudFront's error responses
   turn both 403 and 404 into the real `/404.html` with a **404** status.

### Why the rewrite is needed

A private bucket behind OAC is read over S3's REST endpoint, which serves
objects by exact key and has no notion of "directory → index.html". That
behaviour only exists on S3's *static website hosting* endpoint, which is public
and which OAC deliberately bypasses. So `/getting-started/importing-data` looks
for an object with exactly that key, finds nothing, and 403s.

If the function is ever missing or unassociated, **the homepage still works** —
`defaultRootObject` covers `/` — and every other route 403s. That makes a
routing problem look like a content or permissions problem. `scripts/verify.sh`
checks a nested route for this reason.

### The URL decision, and why it differs from the marketing site

The marketing site 301s extensionless paths to a trailing slash, giving one
canonical URL per page. This site does **not**. It rewrites both `/page` and
`/page/` silently, and both return 200.

That is deliberate. The help site is already live and indexed under 281
slash-less canonical URLs, and Docusaurus is inconsistent about the form:
content pages canonicalise *without* a trailing slash while plugin roots
(`/atlas/`, `/`) canonicalise *with* one. No single redirect rule matches both,
and any rule we picked would leave some canonical tag pointing at a URL that
redirects away. Serving both forms and letting the canonical tag resolve the
duplication is exactly what Netlify does today, so no live URL moved during the
migration.

`trailingSlash` in `docusaurus.config.ts` is therefore left unset, and that is
load-bearing: `false` would emit flat `page.html` files the rewrite would not
find. `viewer-request.test.js` runs on every deploy and in CI and fails if the
two ever disagree.

Normalising to one URL form is a deliberate SEO decision available later. It is
not something to bundle into an infrastructure migration.

## Cache headers: three passes, not two

`aws s3 sync` sets no `Cache-Control` at all, so `scripts/deploy.sh` sets it
explicitly. The marketing site does this in two passes. This site needs three,
because **Astro fingerprints everything it emits and Docusaurus does not**.

Deny-listing extensions — "everything except `.html`/`.xml`/`.txt` is immutable"
— would hand a year-long immutable header to four kinds of file that change on
every build:

| | Why it cannot be immutable |
|---|---|
| `search-index.json` | One unfingerprinted file, rewritten every build. The search plugin busts it with `?_=<hash>`, but the `CACHING_OPTIMIZED` cache policy drops query strings from the cache key, so that bust does not survive the edge |
| `*.md` (281 files) | Raw markdown from the llms-txt plugin. This is what AI crawlers read; a year-stale copy is worse than none |
| `*.xsl` | The RSS/Atom feed stylesheets |
| `img/**` | Screenshots from `static/`, served under their own names. Replace one with the same filename and every returning visitor keeps the old image for a year |

So the immutable pass is an **allow-list** of the one directory that is genuinely
content-hashed, and everything else defaults to revalidating. A future plugin
emitting a new unfingerprinted file type then lands on the safe side by default.

| Pass | Files | `Cache-Control` | `--delete` |
|---|---|---|---|
| 1 | `assets/**` | `public,max-age=31536000,immutable` | no |
| 2 | `img/**` | `public,max-age=3600,s-maxage=31536000` | no |
| 3 | everything else | `public,max-age=0,must-revalidate,s-maxage=31536000` | **yes** |

Two things about pass 3's header. `max-age=0, must-revalidate` makes the
**browser** revalidate on every navigation, so a visitor never sees stale HTML.
`s-maxage=31536000` lets **CloudFront** serve from the edge without asking the
origin. Without the `s-maxage` half, every page view is a `RefreshHit` — the
edge revalidating with S3 in us-east-1 on each request, a full round trip before
the first byte of HTML. On the marketing site build-out that measured 350 ms per
click versus 70 ms; the site felt broken.

The `/*` invalidation on every deploy is what makes the long `s-maxage` safe.
They are a pair. Keep the header, drop the invalidation, and the HTML goes stale
for a year.

Pass 1 and 2 deliberately carry no `--delete`: a visitor holding a cached old
page must never request an asset that has already been removed. The consequence
is that orphaned assets accumulate in the bucket. They are small and cheap;
prune them deliberately if it ever matters, not as part of a deploy.

## The Basic Auth credential

Stored in SSM as a `SecureString` at `/fiskl-help/test/basic-auth` in the form
`user:password`, and injected into the function source at synth time by
`scripts/infra.sh`. It is never committed.

**Be honest about what this is.** A CloudFront Function cannot read a secret at
runtime, so the credential ends up base64-encoded in the deployed function
source, visible to anyone with console access. This is **obfuscation, not
security**. It hides an unfinished site from crawlers and from anyone handed a
link. No real customer data goes near it. CloudFront KeyValueStore can hold the
credential outside the function source and is worth doing when there is time.

## One-time setup

**Bootstrap each account**, once per account and region. This is the step that
is easiest to forget and hardest to diagnose, so `scripts/infra.sh` refuses to
run any other action until it is done:

```bash
scripts/infra.sh test bootstrap
scripts/infra.sh prod bootstrap
```

It is idempotent — already-bootstrapped accounts report "nothing to do" — and it
runs behind the same account assertion as everything else, which matters here
more than anywhere: bootstrap is the one action that creates account-wide IAM
roles, so doing it in the wrong account is worth refusing outright.

Skip it and `cdk` fails with two **misleading** lines first:

```
current credentials could not be used to assume
  'arn:aws:iam::<account>:role/cdk-hnb659fds-file-publishing-role-...',
  but are for the right account. Proceeding anyway.
```

That reads like a credentials problem. It is not. Those roles are created *by*
bootstrap and simply do not exist yet — same single cause as the
`/cdk-bootstrap/hnb659fds/version not found` error that follows. `infra.sh` now
checks for that parameter up front and says so in one sentence instead.

Create the test credential before the first test deploy — the stack refuses to
synthesise without it:

```bash
PW=$(LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 20)
aws ssm put-parameter --profile stage-admin --region us-east-1 \
  --name /fiskl-help/test/basic-auth \
  --description "HTTP Basic Auth for the test help site (user:password). Obfuscation only." \
  --type SecureString --value "fiskl:${PW}"
```

### Pipeline deploys, over OIDC

Until this is set up, `bitbucket-pipelines.yml` still builds and checks every
pull request; only the deploy steps are inert, and deploys run from a laptop.

#### Three different UUIDs, and where each one comes from

This is the part that wastes time, because they are easy to confuse and only one
of them is on the OpenID Connect settings page.

| | What it is | Where to get it |
|---|---|---|
| **Workspace** UUID | Identifies the `fiskl` workspace. Appears *inside* the audience string, `ari:cloud:bitbucket::workspace/<uuid>` | Repository settings → OpenID Connect, the **Audience** field. Copy the whole string, not the UUID out of it |
| **Repository** UUID | Identifies `fiskl/help-site`. The first half of the `sub` claim | **Not** on that page. See below |
| **Deployment environment** UUID | Identifies `test` or `production` specifically. The second half of the `sub` claim | **Not** on that page, and does not exist until you create the environment. See below |

Repository settings → OpenID Connect gives you exactly two things: the identity
provider URL and the audience. It does **not** show the repository or
deployment-environment UUIDs.

**Every one of these UUIDs is wrapped in literal curly braces** in the claim —
`{a1b2c3d4-5678-90ab-cdef-1234567890ab}` — except the workspace UUID inside the
audience, which is not. Copy values verbatim rather than retyping them.

#### Read the real claims instead of assembling them

Do not build the subject by hand. Bitbucket mints the OIDC token whether or not
AWS trusts it yet, so you can read the exact claims before any IAM exists:

1. **Create both deployment environments** — `test` and `production` — in
   Repository settings → Deployments. Do not restrict or add approvers yet; a
   branch restriction on `production` would stop step 2 running from a branch.
2. **Run the `show-oidc-claims` custom pipeline.** It prints the audience and
   the subject for each environment.
3. **Fill in `infra/environments.json`**: the audience once, and each
   environment's `oidcSubject`.

For `oidcSubject`, take the printed subject, keep it **up to and including the
deployment-environment UUID, then append `*`**:

```
{a1b2c3d4-5678-90ab-cdef-1234567890ab}:{9f8e7d6c-5b4a-3210-fedc-ba9876543210}*
 └─ repository ──────────────────────┘ └─ deployment environment ───────────┘
```

The trailing wildcard is not laziness. Bitbucket may append a further step
identifier to the subject, and if it does, an exact match would break the moment
anyone edits the pipeline — an authentication failure with no obvious cause. The
wildcard is still scoped to one repository and one deployment environment, which
is the boundary that matters. `oidcSubject` is matched with `StringLike`, so the
`*` works.

#### Then create the AWS side

**Create the IAM identity provider in each account.** Bitbucket's provider needs
a thumbprint, unlike GitHub's:

```bash
aws iam create-open-id-connect-provider --profile stage-admin \
  --url https://api.bitbucket.org/2.0/workspaces/fiskl/pipelines-config/identity/oidc \
  --client-id-list "<the audience>" \
  --thumbprint-list "$(echo | openssl s_client -servername api.bitbucket.org \
      -connect api.bitbucket.org:443 2>/dev/null | openssl x509 -fingerprint -sha1 -noout \
      | cut -d= -f2 | tr -d ':' | tr 'A-Z' 'a-z')"
```

**Set `ciDeployRole: true`** for that environment and redeploy. The stack refuses
to synthesise a role while any `FILL-ME` placeholder remains, so a
half-configured role cannot reach AWS:

```bash
scripts/infra.sh test deploy
```

The role ARN is a stack output and is published to
`/fiskl-help/<env>/ci-role-arn`. Put it in the matching Bitbucket deployment
environment as the variable `AWS_DEPLOY_ROLE_ARN`.

**Finally, lock down `production`**: restrict it to the `main` branch and add a
required approver.

#### Why that last step carries more weight than it looks

Bitbucket's OIDC subject is built from opaque UUIDs, not a readable path like
GitHub's `repo:owner/name:ref:refs/heads/main`. So "production deploys only from
main" **cannot be expressed in the IAM trust policy**. The trust policy can only
say "this repository, this deployment environment"; the branch restriction lives
in the Bitbucket deployment environment, which is why leaving it unset is not
merely untidy.

That is a real loss of legibility: reading the IAM role no longer tells you which
branch can assume it. Two things compensate. The production role can still only
reach production's bucket and distribution, so the worst case is publishing the
wrong commit rather than to the wrong environment. And `scripts/deploy.sh`
asserts the AWS account before touching anything.

#### If you would rather use the API than run a pipeline

Needs an app password with `repository:read`:

```bash
curl -sn https://api.bitbucket.org/2.0/repositories/fiskl/help-site \
  | python3 -c 'import json,sys; print(json.load(sys.stdin)["uuid"])'

curl -sn https://api.bitbucket.org/2.0/repositories/fiskl/help-site/environments/ \
  | python3 -c 'import json,sys; [print(e["name"], e["uuid"]) for e in json.load(sys.stdin)["values"]]'
```

The pipeline is still the better path: it shows the claim Bitbucket actually
sends, rather than two values you then have to assume are joined with a colon.

## Who can deploy

Each environment's stack creates a `fiskl-help-<env>-editors` IAM group with
exactly enough permission to run `scripts/deploy.sh` for that environment: read
its SSM parameters, write its bucket, invalidate its distribution. Nothing else
in the account, and nothing in the other environment — which is a different AWS
account anyway.

This lives in the stack rather than being applied by hand so it cannot drift
from the resources it names.

To onboard someone, create the user and add them to the group first. Mint the
access key only at the moment you hand it over, so an unused secret is never
sitting in a shell history or a chat transcript:

```bash
aws iam create-user --user-name NAME --profile stage-admin
aws iam add-user-to-group --group-name fiskl-help-test-editors \
  --user-name NAME --profile stage-admin
# only when you are handing it over:
aws iam create-access-key --user-name NAME --profile stage-admin
```

To revoke, remove them from the group **and** delete their keys.

Prove the boundary rather than trusting the JSON — check the denials, not just
the allows:

```bash
G=$(aws iam get-group --group-name fiskl-help-test-editors \
      --profile stage-admin --query 'Group.Arn' --output text)
aws iam simulate-principal-policy --profile stage-admin --policy-source-arn "$G" \
  --action-names s3:PutObject \
  --resource-arns "arn:aws:s3:::some-other-bucket/x" \
  --query 'EvaluationResults[0].EvalDecision' --output text
# implicitDeny
```

Worth checking the same way: another bucket, deleting this bucket, deleting the
distribution, `cloudformation:DeleteStack`, `iam:CreateAccessKey`, and reading
the *other* environment's SSM parameters. All should be `implicitDeny`.

## Rollback is git, not S3

Bucket versioning is on, but restoring object versions one at a time is
miserable. The build is deterministic, so the previous commit reproduces the
previous site exactly:

```bash
git revert --no-edit <bad-commit>
git push origin main
pnpm run deploy:prod
```

## Diagnosing

Which path is a request taking?

```bash
curl -sI https://help.fiskl.com/getting-started/importing-data | grep -i x-cache
#   Hit from cloudfront          served from the edge - correct
#   RefreshHit from cloudfront   edge asked the origin - the slow path, check s-maxage
#   Miss from cloudfront         not cached yet, normal right after a deploy
```

Symptoms worth recognising:

| Symptom | Cause |
|---|---|
| Homepage fine, every other route 403 | The edge function is missing or not associated |
| A bad URL returns 403 instead of 404 | Only one of the two error responses is configured |
| Every page view is slow, `x-cache: RefreshHit` | `s-maxage` missing from the HTML pass |
| A content fix does not appear | The invalidation did not run |
| A replaced screenshot does not appear | Browser cache; up to one hour by design |
| Search returns old results | `search-index.json` got an immutable header — check pass 3's excludes |

## Costs and limits

CloudFront has **no per-distribution fixed charge** — it bills per GB and per
request — which is why the help site has its own distributions rather than
sharing the marketing site's. Sharing would have saved nothing and required
either a shared bucket or Lambda@Edge, because CloudFront selects the origin
from the URL path *before* the edge function runs and has no host-based routing.

CloudFront **pricing plans are per distribution, not per account**, so
allowances do not pool. CDK cannot set the pricing plan; set it in the console
after the stack deploys, and write it down so production is not forgotten.

A single `/*` invalidation counts as one path against the 1,000 free per month,
so there is no reason to be clever about paths.

## Small things that waste an afternoon

- Two concurrent `cdk` commands fight over `cdk.out`. `scripts/infra.sh` gives
  each action its own output directory for exactly this reason.
- `--require-approval` is a `deploy`-only flag. `diff` and `synth` reject it.
- macOS ships **bash 3.2**. No `mapfile`, no `${var^^}`. The scripts are written
  for it.
- `aws s3 sync` compares size and modified time, not metadata. A rebuild changes
  every mtime so new cache headers do propagate — but change headers *without*
  rebuilding and they will not.
- A CDK app synthesises **every** stack on every invocation, not just the one
  being deployed. That is why `scripts/infra.sh` fetches the Basic Auth
  credential unconditionally, before the `case` that picks an action.
- `cdk bootstrap` **still loads the app** from `cdk.json`, even when given an
  explicit `aws://account/region` to bootstrap. So it needs the same `-c env=`
  as every other action, and the whole-app synth means the site stack's Basic
  Auth guard fires during bootstrap too — before the credential can possibly
  exist, since bootstrap has to run first. `scripts/infra.sh` passes a
  synth-only placeholder for that one action; bootstrap deploys only
  `CDKToolkit` and never our stacks, so it cannot reach a deployed function.
  Bypassing the app with `--app` instead does not work: bootstrap then finds no
  `manifest.json` and fails.
- This repo has both a `pnpm-lock.yaml` and a stale `package-lock.json`. pnpm is
  authoritative — it is what `node_modules`, Netlify and these scripts use.
