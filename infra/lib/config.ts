import * as fs from 'fs';
import * as path from 'path';

export type EnvName = 'test' | 'prod';

export interface EnvConfig {
  /** Logical environment name. Drives every resource name and SSM path. */
  readonly envName: EnvName;
  /** AWS account the stacks deploy into. test and prod are separate accounts. */
  readonly account: string;
  /**
   * Always us-east-1: ACM certificates for CloudFront must live there, and
   * keeping the bucket alongside avoids a cross-region CDK app for no benefit.
   */
  readonly region: string;
  /** Public hostname served by the distribution. */
  readonly domainName: string;
  /** Candidate local AWS profiles, most specific first. Read by scripts/lib.sh. */
  readonly profiles: readonly string[];
  /** Gate the distribution behind HTTP Basic Auth (obfuscation, not security). */
  readonly basicAuth: boolean;
  /** Add X-Robots-Tag: noindex, nofollow at the CDN. */
  readonly noindex: boolean;
  /** Keep the bucket if the stack is deleted. */
  readonly retainBucket: boolean;
  /**
   * Create the Bitbucket Pipelines OIDC deploy role. Off until the
   * account-level OIDC provider exists and `oidcSubject` below is filled in -
   * see doc/infrastructure.md. Deploys run from laptops via scripts/deploy.sh
   * until this is turned on.
   */
  readonly ciDeployRole: boolean;
  /**
   * The `sub` claim this environment's role will trust, matched with StringLike
   * so a trailing `*` works.
   *
   * Bitbucket's OIDC subject is built from opaque UUIDs -
   * `{repository-uuid}:{deployment-environment-uuid}` - not a readable path
   * like GitHub's `repo:owner/name:ref:refs/heads/main`. That has a real
   * consequence: "production deploys only from main" cannot be expressed in
   * the IAM trust policy here. It is enforced instead by the Bitbucket
   * deployment environment, which is what the UUID identifies, and which is
   * where the branch restriction and the required approval live.
   *
   * Read the exact values from Repository settings -> OpenID Connect after the
   * repository exists. doc/infrastructure.md has a way to print the real claim
   * from a pipeline run if you want to confirm the format rather than trust it.
   */
  readonly oidcSubject: string;
}

/** Workspace-level Bitbucket OIDC settings, shared by both environments. */
export interface BitbucketConfig {
  readonly workspace: string;
  readonly audience: string;
}

/**
 * Read from environments.json rather than declared here, because the shell
 * scripts need the same account ids and profile names. One file both sides
 * read beats two lists that drift - and these particular values drifting means
 * a deploy pointed at the wrong AWS account.
 */
interface RawFile {
  readonly bitbucket: BitbucketConfig;
  readonly test: Omit<EnvConfig, 'envName'>;
  readonly prod: Omit<EnvConfig, 'envName'>;
}

const RAW: RawFile = (() => {
  const file = path.join(__dirname, '..', 'environments.json');
  return JSON.parse(fs.readFileSync(file, 'utf8')) as RawFile;
})();

const ENVIRONMENTS: Record<EnvName, EnvConfig> = (() => {
  const built = {} as Record<EnvName, EnvConfig>;
  for (const envName of ['test', 'prod'] as const) {
    const entry = RAW[envName];
    if (!entry) throw new Error(`environments.json is missing the "${envName}" entry`);
    built[envName] = { envName, ...entry };
  }
  return built;
})();

export function bitbucketConfig(): BitbucketConfig {
  const bb = RAW.bitbucket;
  if (!bb?.workspace || !bb?.audience) {
    throw new Error('environments.json is missing the "bitbucket" workspace/audience block.');
  }
  return bb;
}

export function resolveEnv(value: unknown): EnvConfig {
  if (value !== 'test' && value !== 'prod') {
    throw new Error(`Missing or invalid context "env". Use: cdk deploy -c env=test|prod (got: ${JSON.stringify(value)})`);
  }
  return ENVIRONMENTS[value];
}
