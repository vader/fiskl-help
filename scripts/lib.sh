#!/usr/bin/env bash
# Shared helpers for the Fiskl help site deploy scripts.
#
# Nothing here hardcodes a bucket name or a distribution id: everything is
# looked up from SSM Parameter Store, keyed by environment. Account ids and
# profile names come from infra/environments.json, which the CDK app reads too,
# so the two sides cannot drift - and these particular values drifting means a
# deploy pointed at the wrong AWS account.
#
# Written for bash 3.2, which is what macOS ships. No mapfile, no ${var^^}.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENVIRONMENTS_FILE="$REPO_ROOT/infra/environments.json"
SSM_PREFIX="/fiskl-help"

require_env_arg() {
  if [ "${1:-}" != "test" ] && [ "${1:-}" != "prod" ]; then
    echo "Usage: $(basename "$0") <test|prod>" >&2
    exit 1
  fi
}

# env_field <env> <field> - reads infra/environments.json
#
# Booleans come back as JSON's "true"/"false", not Python's "True"/"False":
# callers compare against them in shell, and leaking a language's bool repr into
# that comparison is how a flag check silently stops matching.
env_field() {
  python3 -c "
import json
with open('$ENVIRONMENTS_FILE') as f:
    data = json.load(f)
value = data['$1']['$2']
if isinstance(value, bool):
    print('true' if value else 'false')
elif isinstance(value, list):
    print(' '.join(value))
else:
    print(value)
"
}

env_account() { env_field "$1" account; }
env_region()  { env_field "$1" region; }
env_domain()  { env_field "$1" domainName; }

# Per-environment profile override.
#
# A single global override is deliberately NOT supported. The website repo had
# FISKL_AWS_PROFILE and it was a mistake: exported in a shell it applied to
# every environment, so a test command authenticated against whatever account
# that profile belonged to. These are also namespaced to the help site, so an
# override set while working on the marketing site cannot leak into a help
# deploy even though test shares an account.
env_profile() {
  local env="$1" override available candidate

  case "$env" in
    test) override="${FISKL_HELP_AWS_PROFILE_TEST:-}" ;;
    prod) override="${FISKL_HELP_AWS_PROFILE_PROD:-}" ;;
    *) echo "Unknown environment: $env" >&2; return 1 ;;
  esac

  if [ -n "$override" ]; then
    echo "$override"
    return 0
  fi

  # The docs team configures the narrowly-scoped fiskl-help-* profile, which can
  # publish to one environment and nothing else. Developers with a broad admin
  # profile keep using it. First one that exists wins, so the same script works
  # for both without anyone editing it. Empty is the correct answer under CI,
  # where credentials come from an assumed role.
  available="$(aws configure list-profiles 2>/dev/null || true)"
  for candidate in $(env_field "$env" profiles); do
    if echo "$available" | grep -qx "$candidate"; then
      echo "$candidate"
      return 0
    fi
  done
  echo ""
}

# Callers use this unquoted, which is safe: profile names contain no spaces.
aws_profile_flag() {
  [ -n "${1:-}" ] && echo "--profile $1" || true
}

# The guardrail that makes everything else safe.
#
# However the profile was chosen - fallback, override, or an assumed role in CI
# - this refuses to continue unless the credentials in hand belong to the
# account that environment is supposed to live in. Without it, pointing a test
# command at production is a silent misconfiguration rather than an error.
assert_account() {
  local env="$1" expected actual profile flag status env_upper
  expected="$(env_account "$env")"
  profile="$(env_profile "$env")"
  flag="$(aws_profile_flag "$profile")"

  set +e
  # shellcheck disable=SC2086
  actual="$(aws sts get-caller-identity $flag --query Account --output text 2>&1)"
  status=$?
  set -e

  if [ $status -ne 0 ]; then
    fail "Could not authenticate to AWS${profile:+ using profile '$profile'}.

  $actual

  Check: aws sts get-caller-identity${profile:+ --profile $profile}"
  fi

  if [ "$actual" != "$expected" ]; then
    env_upper="$(echo "$env" | tr '[:lower:]' '[:upper:]')"
    fail "Wrong AWS account for '$env' - refusing to continue.

  expected  $expected   (the $env account)
  got       $actual${profile:+   via profile '$profile'}

  Either that profile points at the wrong account, or an override is set.
  Check for FISKL_HELP_AWS_PROFILE_${env_upper} in your shell."
  fi

  if [ -n "${FISKL_AWS_PROFILE:-}" ]; then
    warn "FISKL_AWS_PROFILE is set to '$FISKL_AWS_PROFILE' and is being ignored here."
    warn "A single global profile variable applied to every environment at once,"
    warn "which is why it was replaced. Remove it from your shell."
  fi

  ok "AWS account $actual${profile:+ (profile: $profile)}"
}

# ssm_get <env> <parameter-suffix> [--decrypt]
ssm_get() {
  local env="$1" name="$2" decrypt="${3:-}"
  # shellcheck disable=SC2046,SC2086
  aws ssm get-parameter \
    $(aws_profile_flag "$(env_profile "$env")") --region "$(env_region "$env")" \
    --name "${SSM_PREFIX}/${env}/${name}" \
    ${decrypt:+--with-decryption} \
    --query 'Parameter.Value' --output text
}

# ssm_get_optional <env> <parameter-suffix> [--decrypt]
#
# Empty when the parameter genuinely does not exist. Anything else - expired
# credentials, no permission, the wrong account, no network - fails loudly with
# the real AWS error. Swallowing those makes a credentials problem present as a
# missing parameter and then explode somewhere unrelated.
ssm_get_optional() {
  local out status
  set +e
  out="$(ssm_get "$@" 2>&1)"
  status=$?
  set -e

  if [ $status -eq 0 ]; then
    echo "$out"
    return 0
  fi

  case "$out" in
    *ParameterNotFound*) echo "" ;;
    *) fail "Reading ${SSM_PREFIX}/$1/$2 from SSM failed:

  $out" ;;
  esac
}

# The CDK bootstrap qualifier. Default; cdk.json sets no custom one.
CDK_QUALIFIER="hnb659fds"

# Empty when the account/region has never been CDK-bootstrapped.
#
# Worth checking before every cdk action because the native failure is
# genuinely misleading: CDK first prints two "current credentials could not be
# used to assume 'cdk-hnb659fds-...-role' ... Proceeding anyway" lines, which
# read like a credentials problem, and only then reports the missing parameter.
# Both messages have the same single cause - those roles are created BY
# bootstrap and do not exist yet.
cdk_bootstrap_version() {
  local env="$1" out status
  set +e
  # shellcheck disable=SC2046,SC2086
  out="$(aws ssm get-parameter \
    $(aws_profile_flag "$(env_profile "$env")") --region "$(env_region "$env")" \
    --name "/cdk-bootstrap/${CDK_QUALIFIER}/version" \
    --query 'Parameter.Value' --output text 2>&1)"
  status=$?
  set -e

  if [ $status -eq 0 ]; then
    echo "$out"
    return 0
  fi
  case "$out" in
    *ParameterNotFound*) echo "" ;;
    *) fail "Could not read the CDK bootstrap version for '$env':

  $out" ;;
  esac
}

assert_bootstrapped() {
  local env="$1" version
  version="$(cdk_bootstrap_version "$env")"
  if [ -z "$version" ]; then
    fail "The '$env' account has never been CDK-bootstrapped - refusing to continue.

  account  $(env_account "$env")
  region   $(env_region "$env")

  Bootstrap creates the S3 bucket, ECR repository and IAM roles that every cdk
  deploy in this account needs. It is a one-time step per account and region.

    scripts/infra.sh $env bootstrap

  Without it cdk fails with two misleading 'could not be used to assume role
  ... Proceeding anyway' lines before reporting the real problem. Those roles
  are created by bootstrap; they do not exist yet."
  fi
  ok "CDK bootstrap version $version"
}

info()  { printf '\033[0;36m==>\033[0m %s\n' "$*"; }
ok()    { printf '\033[0;32m  ok\033[0m %s\n' "$*"; }
warn()  { printf '\033[0;33m  !!\033[0m %s\n' "$*"; }
fail()  { printf '\033[0;31merror:\033[0m %s\n' "$*" >&2; exit 1; }
