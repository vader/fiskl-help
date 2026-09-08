#!/usr/bin/env bash
# Seed a fresh Bitbucket repository from a ref in this one, with no history.
#
#   scripts/bitbucket-init.sh                    # seeds from HEAD
#   scripts/bitbucket-init.sh main               # seeds from a named ref
#
# History is deliberately not carried across: the GitHub repository stays
# archived read-only as the record of everything before the move. See the
# provenance section of doc/infrastructure.md.
#
# This script is safe by construction. It uses `git archive` to export the
# tracked tree at a ref into a NEW directory - it never deletes a .git, never
# rewrites this repository, and never pushes. It stops with the push command
# printed for you to run once you have looked at the result.
#
# Delete this script once the move is done; it has no ongoing purpose.

source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"

REF="${1:-HEAD}"
REMOTE_URL="${BITBUCKET_URL:-git@bitbucket.org:fiskl/help-site.git}"

git -C "$REPO_ROOT" rev-parse --verify --quiet "$REF" >/dev/null \
  || fail "No such ref: $REF"

# HEAD must match what you reviewed, or the snapshot is not the thing you read.
if [ "$REF" = "HEAD" ] && [ -n "$(git -C "$REPO_ROOT" status --porcelain)" ]; then
  fail "Working tree is not clean, so HEAD is not what you are about to publish.
Commit first, or pass an explicit ref."
fi

RESOLVED="$(git -C "$REPO_ROOT" rev-parse --short "$REF")"
DEST="${TMPDIR:-/tmp}/fiskl-help-site-seed-$$"

info "Source      : $REF ($RESOLVED)"
info "Destination : $DEST"
info "Remote      : $REMOTE_URL"

mkdir -p "$DEST"
# Tracked files only, at that exact ref. Nothing ignored comes along, so .env,
# node_modules, build/ and the rest cannot leak into the new repository.
git -C "$REPO_ROOT" archive "$REF" | tar -x -C "$DEST"

cd "$DEST"
git init -q -b main
git add -A
git -c user.useConfigOnly=false commit -q -m "Fiskl help site

Docusaurus help guide for help.fiskl.com, served from S3 and CloudFront.

Seeded from ${RESOLVED} of the GitHub repository fiskl-accounting/fiskl-help,
without history. That repository is archived read-only and remains the record
of everything before this point. See doc/infrastructure.md."
git remote add origin "$REMOTE_URL"

FILES="$(git ls-files | wc -l | tr -d ' ')"
echo
ok "Staged a single commit of $FILES files in $DEST"
echo
echo "Check it over, then push:"
echo
echo "    cd $DEST"
echo "    git log --stat -1 | head -30      # what is in the commit"
echo "    git push -u origin main"
echo
echo "Then re-clone so your working copy matches the new repository:"
echo
echo "    git clone $REMOTE_URL"
echo
warn "Nothing has been pushed. The Bitbucket repository must already exist and be empty."
