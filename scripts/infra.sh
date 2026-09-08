#!/usr/bin/env bash
# Deploy the AWS infrastructure for one environment.
#
#   scripts/infra.sh test bootstrap     # one-time per account and region, before anything else
#   scripts/infra.sh test deploy-cert   # certificate stack - blocks until the DNS record is added
#   scripts/infra.sh test deploy        # site stack (picks up the custom domain once the cert is issued)
#   scripts/infra.sh test diff
#
# The Basic Auth credential and the certificate ARN are fetched from SSM, so no
# secret and no environment-specific identifier lives in the repository.

source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"

ENV_NAME="${1:-}"
ACTION="${2:-deploy}"
require_env_arg "$ENV_NAME"
# Refuse to continue unless these credentials belong to this environment's
# account. Everything below assumes it.
assert_account "$ENV_NAME"

PROFILE="$(env_profile "$ENV_NAME")"
PROFILE_FLAG="$(aws_profile_flag "$PROFILE")"

# Both are fetched for every action, unconditionally, because a CDK app
# synthesises EVERY stack in the app on each invocation - not just the one being
# deployed. The site stack throws if it needs a credential and has none, so
# fetching this inside the case below would break `deploy-cert`.
CERT_ARN="$(ssm_get_optional "$ENV_NAME" certificate-arn)"
CRED="$(ssm_get_optional "$ENV_NAME" basic-auth --decrypt)"
if [[ -n "$CRED" ]]; then
  FISKL_BASIC_AUTH_B64="$(printf '%s' "$CRED" | base64 | tr -d '\n')"
  export FISKL_BASIC_AUTH_B64
fi

cd "$REPO_ROOT/infra"
[[ -d node_modules ]] || npm install --no-audit --no-fund

# Each action synthesises into its own directory: the certificate deploy blocks
# for as long as the DNS record takes to appear, and would otherwise hold a lock
# on cdk.out that stops the site stack deploying alongside it.
CDK_OUT="cdk.out/${ACTION}"

case "$ACTION" in
  bootstrap)
    # One-time per account and region. assert_account above is what makes this
    # safe: bootstrapping is the one action here that creates account-wide IAM
    # roles, so doing it in the wrong account is worth refusing outright.
    if [[ -n "$(cdk_bootstrap_version "$ENV_NAME")" ]]; then
      ok "Already bootstrapped - nothing to do"
      exit 0
    fi
    # Two non-obvious things about bootstrapping through this app.
    #
    # `cdk bootstrap` still loads the app from cdk.json even when given an
    # explicit target environment, so it needs the same `-c env=` as every
    # other action. Without it the app throws on resolveEnv before bootstrap
    # gets anywhere near AWS.
    #
    # And because a CDK app synthesises EVERY stack on each invocation, the
    # site stack's Basic Auth guard fires here too. On a fresh account the
    # credential does not exist yet - bootstrap has to run before anything can
    # be deployed - so a placeholder stands in. It is safe: bootstrap deploys
    # only CDKToolkit and never our stacks, so this value cannot reach a
    # deployed function. A real credential, if one is already in SSM, is
    # already exported above and wins.
    : "${FISKL_BASIC_AUTH_B64:=$(printf 'bootstrap:placeholder-not-deployed' | base64 | tr -d '\n')}"
    export FISKL_BASIC_AUTH_B64

    info "Bootstrapping $(env_account "$ENV_NAME") in $(env_region "$ENV_NAME") for CDK"
    exec npx cdk bootstrap "aws://$(env_account "$ENV_NAME")/$(env_region "$ENV_NAME")" \
      -c "env=${ENV_NAME}" --output "$CDK_OUT" $PROFILE_FLAG
    ;;
  deploy-cert)
    assert_bootstrapped "$ENV_NAME"
    info "Deploying certificate stack for $ENV_NAME"
    warn "This blocks until the ACM validation CNAME exists in the fiskl.com hosted zone."
    warn "Run 'scripts/cert-dns.sh $ENV_NAME' in another terminal to print the record."
    exec npx cdk deploy "FisklHelpCert-${ENV_NAME}" \
      -c "env=${ENV_NAME}" --output "$CDK_OUT" $PROFILE_FLAG --require-approval never
    ;;
  deploy|diff|synth)
    assert_bootstrapped "$ENV_NAME"
    if [[ -n "$CERT_ARN" ]]; then
      ok "Certificate found - distribution will serve the custom domain"
    else
      warn "No certificate in SSM yet - distribution will be created on its *.cloudfront.net name only"
    fi
    # --require-approval is a deploy-only flag; diff and synth reject it.
    APPROVAL=""
    [ "$ACTION" = "deploy" ] && APPROVAL="--require-approval never"

    info "cdk $ACTION FisklHelp-${ENV_NAME}"
    exec npx cdk "$ACTION" "FisklHelp-${ENV_NAME}" \
      -c "env=${ENV_NAME}" ${CERT_ARN:+-c "certArn=${CERT_ARN}"} \
      --output "$CDK_OUT" $PROFILE_FLAG $APPROVAL
    ;;
  *)
    fail "Unknown action: $ACTION (expected bootstrap, deploy, deploy-cert, diff or synth)"
    ;;
esac
