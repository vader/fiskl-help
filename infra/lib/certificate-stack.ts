import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { EnvConfig } from './config';

/**
 * The ACM certificate lives in its own stack because DNS validation is manual:
 * CloudFormation sits in CREATE_IN_PROGRESS until the validation CNAME appears
 * in the fiskl.com hosted zone. Keeping it separate means the site stack is a
 * fast, repeatable deploy that never blocks on a human adding a DNS record.
 *
 * Run `scripts/cert-dns.sh <env>` while this stack is creating to print the
 * record that needs adding.
 */
export class CertificateStack extends cdk.Stack {
  public readonly certificate: acm.ICertificate;

  constructor(scope: Construct, id: string, config: EnvConfig, props?: cdk.StackProps) {
    super(scope, id, props);

    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: config.domainName,
      certificateName: `fiskl-help-${config.envName}`,
      validation: acm.CertificateValidation.fromDns(),
    });
    this.certificate = certificate;

    new ssm.StringParameter(this, 'CertificateArnParam', {
      parameterName: `/fiskl-help/${config.envName}/certificate-arn`,
      stringValue: certificate.certificateArn,
      description: `ACM certificate for ${config.domainName}`,
    });

    new cdk.CfnOutput(this, 'CertificateArn', { value: certificate.certificateArn });
    new cdk.CfnOutput(this, 'DomainName', { value: config.domainName });
  }
}
