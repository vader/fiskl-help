#!/usr/bin/env bash
# Build the Docusaurus help site and publish it to an environment.
#
#   scripts/deploy.sh test
#   scripts/deploy.sh prod          (requires a clean main matching origin, plus typed confirmation)
#
# Bucket name and distribution id are read from SSM. Nothing environment
# specific is hardcoded here, so test and prod cannot be crossed.

source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"

ENV_NAME="${1:-}"
require_env_arg "$ENV_NAME"
# Before anything else: are these credentials for the right account? Publishing
# is the operation where being pointed at the wrong environment matters most.
assert_account "$ENV_NAME"

PROFILE="$(env_profile "$ENV_NAME")"
PROFILE_FLAG="$(aws_profile_flag "$PROFILE")"
AWS_REGION="$(env_region "$ENV_NAME")"

# --- Guards ------------------------------------------------------------------
# Production needs a deliberate act. On a laptop that is a typed confirmation
# plus a clean main matching origin. In CI those git checks are both wrong and
# redundant: Actions checks out a detached HEAD, so `rev-parse --abbrev-ref
# HEAD` returns "HEAD" rather than "main", and the guarantee is enforced
# further up anyway - the workflow only runs this on a push to main, the
# environment requires a reviewer's approval, and the OIDC trust policy will
# only issue production credentials to a token whose subject is
# refs/heads/main. AWS refuses before the script gets a say.
if [[ "$ENV_NAME" == "prod" ]]; then
  if [[ -n "${GITHUB_ACTIONS:-}${CI:-}" ]]; then
    ok "Running in CI - branch and confirmation guards are enforced by the workflow and the OIDC trust policy"
  else
    BRANCH="$(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD)"
    [[ "$BRANCH" == "main" ]] || fail "Production deploys only from main (currently on '$BRANCH')."
    [[ -z "$(git -C "$REPO_ROOT" status --porcelain)" ]] || fail "Working tree is not clean. Commit or stash first."
    git -C "$REPO_ROOT" fetch --quiet origin main
    LOCAL="$(git -C "$REPO_ROOT" rev-parse HEAD)"
    REMOTE="$(git -C "$REPO_ROOT" rev-parse origin/main)"
    [[ "$LOCAL" == "$REMOTE" ]] || fail "Local main does not match origin/main. Pull or push first."

    warn "About to publish $(git -C "$REPO_ROOT" log -1 --format='%h %s') to PRODUCTION."
    # Never block on `read` without a terminal: with stdin closed it returns
    # immediately with an empty value, which would read as "not confirmed" here
    # but is the kind of thing that quietly becomes a hang or a false pass.
    if [[ -t 0 ]]; then
      read -r -p "Type DEPLOY PROD to continue: " CONFIRM
    else
      fail "Production deploys need a terminal to confirm on. Run this interactively."
    fi
    [[ "$CONFIRM" == "DEPLOY PROD" ]] || fail "Not confirmed - nothing was deployed."
  fi
fi

# --- Discover the target -----------------------------------------------------
BUCKET="$(ssm_get "$ENV_NAME" bucket-name)" || fail "No bucket in SSM for '$ENV_NAME'. Deploy the infrastructure first: scripts/infra.sh $ENV_NAME deploy"
DISTRIBUTION_ID="$(ssm_get "$ENV_NAME" distribution-id)"
SITE_URL="$(ssm_get "$ENV_NAME" site-url)"
DISTRIBUTION_DOMAIN="$(ssm_get "$ENV_NAME" distribution-domain)"

info "Environment : $ENV_NAME ($PROFILE)"
info "Bucket      : $BUCKET"
info "Distribution: $DISTRIBUTION_ID"
info "Site URL    : $SITE_URL"

# --- Build -------------------------------------------------------------------
# pnpm, not npm: node_modules and the newer lockfile are pnpm's, and that is
# what Netlify built with. A stale package-lock.json is still in the repo.
info "Building the site"
cd "$REPO_ROOT"
[[ -d node_modules ]] || pnpm install --frozen-lockfile
SITE_URL="$SITE_URL" SITE_ENV="$ENV_NAME" pnpm run build

[[ -f build/index.html && -f build/404.html ]] || fail "Build output looks wrong - build/index.html or build/404.html is missing."

# The edge function's rewrite rule and the layout Docusaurus emits have to
# agree, or routes 403 individually while the homepage keeps working. Cheap to
# check, and it catches a Docusaurus upgrade changing the output shape.
info "Checking every route against the edge function"
node infra/functions/viewer-request.test.js || fail "The edge function does not match this build's layout."

# --- Upload ------------------------------------------------------------------
# aws s3 sync sets no Cache-Control at all, so it is set here, in three passes.
#
# Three, not the two the runbook describes for the Astro site, because Astro
# fingerprints everything it emits and Docusaurus does not. Deny-listing
# extensions ("everything except .html/.xml/.txt is immutable") would give a
# year-long immutable header to four kinds of file that change on every build:
#
#   search-index.json   one unfingerprinted file, rewritten every build. The
#                       search plugin busts it with ?_=<hash>, but the
#                       CACHING_OPTIMIZED cache policy drops query strings from
#                       the cache key, so that bust does not survive the edge.
#   *.md                281 raw markdown files from the llms-txt plugin. This is
#                       what AI crawlers read - a year-stale copy is worse than
#                       none.
#   *.xsl               the RSS/Atom feed stylesheets.
#   img/**              screenshots from static/, served under their own names.
#                       Replace a screenshot with the same filename and every
#                       returning visitor keeps the old one for a year.
#
# So the immutable pass is an ALLOW-list of the one directory that is genuinely
# content-hashed, and everything else defaults to revalidating. A future plugin
# emitting a new unfingerprinted file type then lands on the safe side.
info "Pass 1/3  assets/  - fingerprinted js and css (immutable, one year)"
aws s3 sync build "s3://${BUCKET}" \
  $PROFILE_FLAG --region "$AWS_REGION" \
  --exclude "*" --include "assets/*" \
  --cache-control "public,max-age=31536000,immutable" \
  --no-progress

# Images keep their source filenames, so they cannot be immutable. One hour of
# browser cache with a year at the edge: the deploy's invalidation keeps the
# edge correct, and a replaced screenshot is stale for an hour at worst.
info "Pass 2/3  img/     - unfingerprinted images (1h browser, edge-cached)"
aws s3 sync build "s3://${BUCKET}" \
  $PROFILE_FLAG --region "$AWS_REGION" \
  --exclude "*" --include "img/*" \
  --cache-control "public,max-age=3600,s-maxage=31536000" \
  --no-progress

# Everything else: html, md, txt, xml, xsl, json. This pass carries --delete, so
# it prunes anything that has gone from the build. assets/ and img/ are excluded
# and therefore never pruned - a visitor holding a cached old page must never
# request an asset that has already been removed.
#
# The two halves of this header do different jobs:
#   max-age=0, must-revalidate  the BROWSER revalidates on every navigation, so
#                               a visitor never sees stale HTML
#   s-maxage=31536000           CLOUDFRONT serves from the edge without asking
#                               the origin, because the deploy below invalidates
#
# Without s-maxage, every page view is a RefreshHit: the edge revalidates with
# S3 in us-east-1 on each request, adding a full round trip - about 350ms from
# London - before the first byte of HTML. The invalidation is what keeps this
# safe; do not lengthen the browser half.
info "Pass 3/3  the rest - html, md, txt, xml (edge-cached, browser revalidates)"
aws s3 sync build "s3://${BUCKET}" \
  $PROFILE_FLAG --region "$AWS_REGION" \
  --exclude "assets/*" --exclude "img/*" \
  --cache-control "public,max-age=0,must-revalidate,s-maxage=31536000" \
  --delete --no-progress

# --- Invalidate --------------------------------------------------------------
# One /* counts as a single path against the 1,000 free monthly invalidations.
# This is what makes the long s-maxage safe: keep the header and drop the
# invalidation and the HTML goes stale for a year.
info "Invalidating the CloudFront cache"
INVALIDATION_ID="$(aws cloudfront create-invalidation \
  $PROFILE_FLAG --distribution-id "$DISTRIBUTION_ID" --paths "/*" \
  --query 'Invalidation.Id' --output text)"
ok "Invalidation $INVALIDATION_ID created (usually clears within a minute)"

echo
ok "Deployed to $ENV_NAME"
echo "   $SITE_URL"
echo "   https://${DISTRIBUTION_DOMAIN}   (direct, works before DNS)"
echo
echo "   Verify it properly:  scripts/verify.sh $ENV_NAME"
if [[ "$ENV_NAME" == "test" ]]; then
  echo
  echo "   The test site is behind HTTP Basic Auth. Retrieve the credential with:"
  echo "   aws ssm get-parameter ${PROFILE_FLAG:-} --region $AWS_REGION \\"
  echo "     --name /fiskl-help/test/basic-auth --with-decryption --query Parameter.Value --output text"
fi
