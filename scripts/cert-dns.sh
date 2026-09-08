#!/usr/bin/env bash
# Print the Route 53 record needed to validate the ACM certificate.
# DNS changes are made by hand, so this exists to hand over an exact record.
#
# You cannot read the validation record out of a CloudFormation output while the
# stack is still creating, which is why this queries ACM directly.

source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"

ENV_NAME="${1:-}"
require_env_arg "$ENV_NAME"
assert_account "$ENV_NAME"

PROFILE_FLAG="$(aws_profile_flag "$(env_profile "$ENV_NAME")")"
AWS_REGION="$(env_region "$ENV_NAME")"
DOMAIN="$(env_domain "$ENV_NAME")"

# Match this environment's exact hostname, not any *.fiskl.com certificate: the
# marketing site's certificates live in the same accounts and picking the wrong
# one sends someone off to add a record that is already there.
ARN="$(aws acm list-certificates $PROFILE_FLAG --region "$AWS_REGION" \
  --query "CertificateSummaryList[?DomainName=='${DOMAIN}'].CertificateArn | [-1]" \
  --output text)"

[[ "$ARN" == "None" || -z "$ARN" ]] && fail "No certificate for ${DOMAIN} yet - is the cert stack still creating?"

info "Certificate for ${DOMAIN}"
aws acm describe-certificate $PROFILE_FLAG --region "$AWS_REGION" --certificate-arn "$ARN" \
  --query 'Certificate.{Domain:DomainName,Status:Status,Validation:DomainValidationOptions[0].ResourceRecord}' \
  --output json

echo
echo "Add that CNAME to the fiskl.com hosted zone (stage account), then leave it"
echo "in place afterwards so ACM can auto-renew."
