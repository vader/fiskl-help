import * as fs from 'fs';
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { EnvConfig, GITHUB_REPO } from './config';

export interface HelpSiteStackProps extends cdk.StackProps {
  readonly config: EnvConfig;
  /**
   * ARN of an ISSUED ACM certificate in us-east-1. When absent the
   * distribution is created without a custom domain and is reachable only on
   * its *.cloudfront.net name - which is how the very first deploy runs, before
   * DNS validation has completed.
   */
  readonly certificateArn?: string;
  /** base64("user:password") for the Basic Auth gate, injected at deploy time. */
  readonly basicAuthB64?: string;
}

export class HelpSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: HelpSiteStackProps) {
    super(scope, id, props);

    const { config, certificateArn, basicAuthB64 } = props;
    const prefix = `fiskl-help-${config.envName}`;

    // --- Origin: a private bucket that is a dumb file store ------------------
    const bucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: `${prefix}-${this.account}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: config.retainBucket ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: !config.retainBucket,
      lifecycleRules: [
        { id: 'expire-noncurrent-versions', noncurrentVersionExpiration: cdk.Duration.days(90) },
        { id: 'abort-incomplete-uploads', abortIncompleteMultipartUploadAfter: cdk.Duration.days(7) },
      ],
    });

    // --- Edge function: Basic Auth gate + directory rewrite ------------------
    const viewerRequestFn = new cloudfront.Function(this, 'ViewerRequestFunction', {
      functionName: `${prefix}-viewer-request`,
      runtime: cloudfront.FunctionRuntime.JS_2_0,
      comment: 'Directory -> index.html rewrite for the S3 REST origin, plus the staging auth gate',
      code: cloudfront.FunctionCode.fromInline(this.buildFunctionCode(config, basicAuthB64)),
    });

    // --- Response headers ----------------------------------------------------
    //
    // The CORS block replaces what static/_headers did on Netlify, which set
    // Access-Control-Allow-Origin: * on /updates/rss.xml so the feed could be
    // read cross-origin. CloudFront applies a response headers policy per cache
    // behaviour, not per path, so scoping it to just the feed would mean a
    // second behaviour and a second function association - more surface to get
    // wrong than the header is worth. Every byte of this site is public help
    // documentation with no credentialed API behind it, so allowing any origin
    // to read it is not an exposure. On test, Basic Auth still applies: CORS
    // does not bypass authentication, and "*" cannot be combined with
    // credentials anyway.
    const responseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(this, 'ResponseHeaders', {
      responseHeadersPolicyName: `${prefix}-headers`,
      securityHeadersBehavior: {
        contentTypeOptions: { override: true },
        frameOptions: { frameOption: cloudfront.HeadersFrameOption.SAMEORIGIN, override: true },
        referrerPolicy: {
          referrerPolicy: cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
          override: true,
        },
        strictTransportSecurity: {
          accessControlMaxAge: cdk.Duration.days(365),
          includeSubdomains: false,
          override: true,
        },
      },
      corsBehavior: {
        accessControlAllowCredentials: false,
        accessControlAllowHeaders: ['*'],
        accessControlAllowMethods: ['GET', 'HEAD', 'OPTIONS'],
        accessControlAllowOrigins: ['*'],
        originOverride: true,
      },
      // Basic Auth already blocks well-behaved crawlers, but a CDN-level
      // X-Robots-Tag costs nothing, applies to every file, and cannot be
      // defeated by a stale robots.txt. Two layers, both cheap.
      customHeadersBehavior: {
        customHeaders: config.noindex
          ? [{ header: 'X-Robots-Tag', value: 'noindex, nofollow', override: true }]
          : [],
      },
    });

    const certificate = certificateArn
      ? acm.Certificate.fromCertificateArn(this, 'Certificate', certificateArn)
      : undefined;

    // --- Distribution --------------------------------------------------------
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      comment: prefix,
      defaultRootObject: 'index.html',
      domainNames: certificate ? [config.domainName] : undefined,
      certificate,
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        // CACHING_OPTIMIZED excludes the query string from the cache key. That
        // is what we want: it stops every ?utm_source= link fragmenting the
        // cache. The one thing relying on a query string is the search plugin's
        // "search-index.json?_=<hash>" cache bust, which is why that file is
        // uploaded with a revalidating header rather than an immutable one -
        // see scripts/deploy.sh.
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        responseHeadersPolicy,
        compress: true,
        functionAssociations: [
          { function: viewerRequestFn, eventType: cloudfront.FunctionEventType.VIEWER_REQUEST },
        ],
      },
      // OAC on a private bucket returns 403 for a missing object - S3 masks the
      // underlying 404 - so both codes must map to the real 404 page, and both
      // must answer 404 so crawlers read "absent", not "forbidden".
      //
      // Never map these to /index.html with a 200. That is the single-page-app
      // pattern and it is wrong here: it turns every dead URL into a soft 404.
      // Docusaurus IS a React app after hydration, so that will feel like the
      // right instinct - but every route is pre-rendered to real HTML, and real
      // HTML is what a crawler and a cold visitor get.
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: cdk.Duration.minutes(5) },
        { httpStatus: 404, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: cdk.Duration.minutes(5) },
      ],
    });

    // --- Deploy-time discovery: nothing downstream hardcodes an identifier ---
    new ssm.StringParameter(this, 'BucketNameParam', {
      parameterName: `/fiskl-help/${config.envName}/bucket-name`,
      stringValue: bucket.bucketName,
    });
    new ssm.StringParameter(this, 'DistributionIdParam', {
      parameterName: `/fiskl-help/${config.envName}/distribution-id`,
      stringValue: distribution.distributionId,
    });
    new ssm.StringParameter(this, 'DistributionDomainParam', {
      parameterName: `/fiskl-help/${config.envName}/distribution-domain`,
      stringValue: distribution.distributionDomainName,
    });
    new ssm.StringParameter(this, 'SiteUrlParam', {
      parameterName: `/fiskl-help/${config.envName}/site-url`,
      stringValue: `https://${config.domainName}`,
    });

    // --- Who is allowed to publish ------------------------------------------
    // Exactly enough to run scripts/deploy.sh for this one environment: read
    // its SSM parameters, write its bucket, invalidate its distribution.
    // Nothing else in the account, and nothing in the other environment - which
    // lives in a different AWS account anyway.
    //
    // This lives in the stack rather than being applied by hand so it can never
    // drift from the resources it names: recreate the distribution and the
    // policy follows it.
    const deployStatements = [
      new iam.PolicyStatement({
        sid: 'DiscoverTargetsFromSsm',
        actions: ['ssm:GetParameter', 'ssm:GetParameters'],
        resources: [
          cdk.Arn.format(
            { service: 'ssm', resource: 'parameter', resourceName: `fiskl-help/${config.envName}/*` },
            this,
          ),
        ],
      }),
      new iam.PolicyStatement({
        sid: 'CompareBeforeUploading',
        actions: ['s3:ListBucket', 's3:GetBucketLocation'],
        resources: [bucket.bucketArn],
      }),
      new iam.PolicyStatement({
        sid: 'PublishTheSite',
        actions: ['s3:GetObject', 's3:PutObject', 's3:DeleteObject'],
        resources: [bucket.arnForObjects('*')],
      }),
      new iam.PolicyStatement({
        sid: 'ClearTheCache',
        actions: ['cloudfront:CreateInvalidation', 'cloudfront:GetInvalidation', 'cloudfront:GetDistribution'],
        resources: [
          cdk.Arn.format(
            { service: 'cloudfront', region: '', resource: 'distribution', resourceName: distribution.distributionId },
            this,
          ),
        ],
      }),
      // Reading the Basic Auth credential out of SSM needs a decrypt, but only
      // through SSM - these credentials cannot decrypt anything else.
      ...(config.basicAuth
        ? [
            new iam.PolicyStatement({
              sid: 'ReadTheBasicAuthCredential',
              actions: ['kms:Decrypt'],
              resources: ['*'],
              conditions: { StringEquals: { 'kms:ViaService': `ssm.${this.region}.amazonaws.com` } },
            }),
          ]
        : []),
    ];

    const deployPolicy = new iam.ManagedPolicy(this, 'DeployPolicy', {
      managedPolicyName: `${prefix}-deploy`,
      description: `Publish the Fiskl ${config.envName} help site. Cannot reach any other resource.`,
      statements: deployStatements,
    });

    const editors = new iam.Group(this, 'EditorsGroup', {
      groupName: `${prefix}-editors`,
      managedPolicies: [deployPolicy],
    });

    // --- CI deploy role, for GitHub Actions over OIDC ------------------------
    // Off by default: it needs an account-level OIDC identity provider that
    // does not exist yet (docs/RUNBOOK.md has the one-time command). Turn it on
    // per environment in environments.json once the provider is in place.
    //
    // No IAM user, no access keys. The workflow presents a short-lived identity
    // token, AWS trusts GitHub's OIDC provider, and the credentials expire in
    // minutes. Retrofitting this later means reissuing everything.
    let ciRoleArn = 'not-created';
    if (config.githubOidcRole) {
      const provider = iam.OpenIdConnectProvider.fromOpenIdConnectProviderArn(
        this,
        'GitHubOidcProvider',
        `arn:${this.partition}:iam::${this.account}:oidc-provider/token.actions.githubusercontent.com`,
      );

      // Production is scoped to main. Test allows any ref, which is the point:
      // reviewing an unmerged branch is what the test site exists for.
      //
      // Both conditions are built into one object deliberately. Production's
      // subject needs an exact StringEquals and the audience check is also a
      // StringEquals, so writing them as two separate keys would have the
      // second silently overwrite the first - dropping the audience check and
      // leaving the role assumable by any GitHub Actions token presented with
      // a different audience.
      const isProd = config.envName === 'prod';
      const conditions: Record<string, Record<string, string>> = {
        StringEquals: { 'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com' },
      };
      if (isProd) {
        conditions.StringEquals['token.actions.githubusercontent.com:sub'] =
          `repo:${GITHUB_REPO}:ref:refs/heads/main`;
      } else {
        conditions.StringLike = {
          'token.actions.githubusercontent.com:sub': `repo:${GITHUB_REPO}:*`,
        };
      }

      const ciRole = new iam.Role(this, 'CiDeployRole', {
        roleName: `${prefix}-ci-deploy`,
        description: `GitHub Actions deploys of the Fiskl ${config.envName} help site`,
        maxSessionDuration: cdk.Duration.hours(1),
        assumedBy: new iam.OpenIdConnectPrincipal(provider, conditions),
        managedPolicies: [deployPolicy],
      });
      ciRoleArn = ciRole.roleArn;

      new ssm.StringParameter(this, 'CiRoleArnParam', {
        parameterName: `/fiskl-help/${config.envName}/ci-role-arn`,
        stringValue: ciRole.roleArn,
      });
    }

    new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
    new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
    new cdk.CfnOutput(this, 'DistributionDomainName', { value: distribution.distributionDomainName });
    new cdk.CfnOutput(this, 'CustomDomainAttached', { value: certificate ? config.domainName : 'not-yet' });
    new cdk.CfnOutput(this, 'CiDeployRoleArn', { value: ciRoleArn });
    new cdk.CfnOutput(this, 'EditorsGroupName', {
      value: editors.groupName,
      description: 'Add a person to this group to let them publish to this environment',
    });
    new cdk.CfnOutput(this, 'Route53RecordToCreate', {
      value: `${config.domainName} A ALIAS -> ${distribution.distributionDomainName}`,
      description: 'Create this record manually in the fiskl.com hosted zone (stage account)',
    });
  }

  /**
   * Reads the checked-in function source and specialises it for the target
   * environment: the credential is substituted in, or the whole auth block is
   * removed when the environment is public.
   */
  private buildFunctionCode(config: EnvConfig, basicAuthB64?: string): string {
    const source = fs.readFileSync(path.join(__dirname, '..', 'functions', 'viewer-request.js'), 'utf8');
    const authBlock = /[ \t]*\/\/ --- BASIC_AUTH_START ---[\s\S]*?\/\/ --- BASIC_AUTH_END ---\n/;

    if (!config.basicAuth) {
      return source.replace(authBlock, '');
    }
    if (!basicAuthB64) {
      throw new Error(
        `Environment "${config.envName}" requires Basic Auth but no credential was supplied.\n` +
          `Deploy through scripts/infra.sh, which reads /fiskl-help/${config.envName}/basic-auth from SSM.`,
      );
    }
    return source.replace('__BASIC_AUTH_B64__', basicAuthB64);
  }
}
