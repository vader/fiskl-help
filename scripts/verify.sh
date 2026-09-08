#!/usr/bin/env bash
# Verify a deployed help site environment end to end.
#
#   scripts/verify.sh test
#   scripts/verify.sh prod
#
# Do not just load the homepage. The homepage works even when the edge function
# is entirely broken, because defaultRootObject covers "/". The checks that
# matter are the nested route (proves the rewrite) and the bad URL (proves both
# error responses are mapped).

source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"

ENV_NAME="${1:-}"
require_env_arg "$ENV_NAME"
assert_account "$ENV_NAME"

D="$(ssm_get "$ENV_NAME" site-url)"
BASIC_AUTH="$(env_field "$ENV_NAME" basicAuth)"
NOINDEX="$(env_field "$ENV_NAME" noindex)"

AUTH=()
if [[ "$BASIC_AUTH" == "true" ]]; then
  CRED="$(ssm_get "$ENV_NAME" basic-auth --decrypt)"
  AUTH=(-u "$CRED")
fi

PASS=0
FAILED=0

# Probe paths are discovered from the local build rather than hardcoded: the
# fingerprint in a css filename changes on every build, so a literal path here
# would start failing for the wrong reason. Falls back to fixed paths when
# build/ is absent - verify.sh is useful on its own, not only after a deploy.
BUILD_DIR="$REPO_ROOT/build"
find_one() {
  [ -d "$BUILD_DIR" ] || { echo "$2"; return; }
  local hit
  hit="$(cd "$BUILD_DIR" && ls $1 2>/dev/null | head -1)"
  [ -n "$hit" ] && echo "/$hit" || echo "$2"
}
CSS_PATH="$(find_one 'assets/css/*.css' '/assets/css/styles.css')"
IMG_PATH="$(find_one 'img/*.png' '/img/fiskl-logomark.png')"

# A nested route, which is the single most important check: it is what proves
# the edge function is associated and rewriting.
NESTED_ROUTE="/getting-started/importing-data"
if [ -d "$BUILD_DIR" ] && [ ! -f "$BUILD_DIR${NESTED_ROUTE}/index.html" ]; then
  NESTED_ROUTE="$(cd "$BUILD_DIR" && find . -mindepth 2 -maxdepth 3 -name index.html \
    -not -path './assets/*' -not -path './img/*' 2>/dev/null | head -1 \
    | sed 's|^\.||; s|/index\.html$||')"
  [ -n "$NESTED_ROUTE" ] || fail "Could not find a nested route in build/ to test."
  warn "getting-started/importing-data is gone; testing $NESTED_ROUTE instead"
fi

# expect <description> <expected> <actual>
expect() {
  if [[ "$3" == "$2" ]]; then
    ok "$1"
    PASS=$((PASS + 1))
  else
    printf '\033[0;31mFAIL\033[0m %s\n       expected: %s\n       got:      %s\n' "$1" "$2" "$3"
    FAILED=$((FAILED + 1))
  fi
}

# expect_match <description> <regex> <actual>
expect_match() {
  if echo "$3" | grep -qiE "$2"; then
    ok "$1"
    PASS=$((PASS + 1))
  else
    printf '\033[0;31mFAIL\033[0m %s\n       expected to match: %s\n       got:      %s\n' "$1" "$2" "$3"
    FAILED=$((FAILED + 1))
  fi
}

code()   { curl -s "${AUTH[@]}" -o /dev/null -w '%{http_code}' "$1"; }
header() { curl -sI "${AUTH[@]}" "$1" | tr -d '\r'; }

info "Verifying $ENV_NAME at $D"
echo

# 1. The auth gate, on the environments that have one.
if [[ "$BASIC_AUTH" == "true" ]]; then
  expect "unauthenticated request is refused" "401" "$(curl -s -o /dev/null -w '%{http_code}' "$D/")"
else
  expect "site is public (no auth gate)" "200" "$(curl -s -o /dev/null -w '%{http_code}' "$D/")"
fi

# 2-3. Routing. The nested route is the check that matters most: it is the one
# that proves the edge function is associated and rewriting.
expect "homepage"                           "200" "$(code "$D/")"
expect "nested route, no trailing slash"    "200" "$(code "$D${NESTED_ROUTE}")"
expect "nested route, trailing slash"       "200" "$(code "$D${NESTED_ROUTE}/")"
expect "second docs instance (/atlas/)"     "200" "$(code "$D/atlas/")"
expect "blog route (/updates)"              "200" "$(code "$D/updates")"

# 4. The canonical URLs must not have moved. A 301 here means the migration
# changed 281 indexed URLs, which it is specifically designed not to do.
expect "no redirect on the canonical form"  "200" "$(curl -s "${AUTH[@]}" -o /dev/null -w '%{http_code}' "$D${NESTED_ROUTE}")"

# 5. The check people skip. A 403 here instead of 404 means the error responses
# are only half configured - S3 masks the 404 behind OAC and returns 403.
expect "unknown URL is 404, not 403 or 200" "404" "$(code "$D/definitely-not-a-page")"
expect "unknown nested URL is 404"          "404" "$(code "$D$(dirname "$NESTED_ROUTE")/no-such-page")"

# 6. Assets and their cache headers - the three upload passes.
expect_match "fingerprinted css is immutable" \
  "cache-control:.*immutable" "$(header "$D${CSS_PATH}")"
expect_match "images are NOT immutable" \
  "cache-control:.*max-age=3600" "$(header "$D${IMG_PATH}")"
expect_match "html revalidates in the browser" \
  "cache-control:.*must-revalidate" "$(header "$D/")"
expect_match "search index is NOT immutable" \
  "cache-control:.*must-revalidate" "$(header "$D/search-index.json")"
expect_match "llms.txt is NOT immutable" \
  "cache-control:.*must-revalidate" "$(header "$D/llms.txt")"
expect_match "raw markdown for AI crawlers is NOT immutable" \
  "cache-control:.*must-revalidate" "$(header "$D/index.md")"

# 7. Search and the feed still work.
expect "search index is reachable"          "200" "$(code "$D/search-index.json")"
expect "sitemap.xml is reachable"           "200" "$(code "$D/sitemap.xml")"
expect "llms.txt is reachable"              "200" "$(code "$D/llms.txt")"
expect_match "feed is readable cross-origin (replaces Netlify _headers)" \
  "access-control-allow-origin" "$(curl -sI "${AUTH[@]}" -H 'Origin: https://app.fiskl.com' "$D/updates/rss.xml" | tr -d '\r')"

# 8. Netlify's artifact must not be served from CloudFront.
expect "Netlify _headers artifact is not public" "404" "$(code "$D/_headers")"

# 9. Indexing. Two layers on test: the CDN header and robots.txt.
if [[ "$NOINDEX" == "true" ]]; then
  expect_match "X-Robots-Tag noindex at the CDN" \
    "x-robots-tag:.*noindex" "$(header "$D/")"
  expect_match "robots.txt disallows crawling" \
    "disallow: */" "$(curl -s "${AUTH[@]}" "$D/robots.txt")"
  expect_match "sitemap points at this environment, not production" \
    "$D" "$(curl -s "${AUTH[@]}" "$D/sitemap.xml" | head -c 400)"
else
  expect_match "robots.txt allows crawling" \
    "allow: */" "$(curl -s "$D/robots.txt")"
  expect_match "robots.txt advertises the sitemap" \
    "sitemap:" "$(curl -s "$D/robots.txt")"
fi

# 10. Edge caching. RefreshHit means the edge is asking S3 on every request -
# the 350ms-per-click failure mode. Warm it, then look.
curl -s "${AUTH[@]}" -o /dev/null "$D${NESTED_ROUTE}"
sleep 2
XCACHE="$(header "$D${NESTED_ROUTE}" | grep -i '^x-cache:' || echo 'x-cache: absent')"
case "$XCACHE" in
  *RefreshHit*) warn "$XCACHE  <- the edge is revalidating with S3 on every request; check s-maxage" ;;
  *Hit*)        ok "$XCACHE" ;;
  *)            warn "$XCACHE  (a Miss is normal right after a deploy - re-run to confirm)" ;;
esac

echo
if [[ $FAILED -gt 0 ]]; then
  fail "$FAILED check(s) failed, $PASS passed."
fi
ok "All $PASS checks passed for $ENV_NAME."
