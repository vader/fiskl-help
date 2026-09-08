#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { resolveEnv } from '../lib/config';
import { CertificateStack } from '../lib/certificate-stack';
import { HelpSiteStack } from '../lib/help-site-stack';

const app = new cdk.App();
const config = resolveEnv(app.node.tryGetContext('env'));

const certificateArn = app.node.tryGetContext('certArn') as string | undefined;
const basicAuthB64 = process.env.FISKL_BASIC_AUTH_B64;

const env = { account: config.account, region: config.region };
const tags = { Project: 'fiskl-help', Environment: config.envName, ManagedBy: 'cdk' };

new CertificateStack(app, `FisklHelpCert-${config.envName}`, config, {
  env,
  description: `ACM certificate for the Fiskl ${config.envName} help site`,
  tags,
});

new HelpSiteStack(app, `FisklHelp-${config.envName}`, {
  env,
  description: `S3 + CloudFront static hosting for the Fiskl ${config.envName} help site`,
  tags,
  config,
  certificateArn,
  basicAuthB64,
});
