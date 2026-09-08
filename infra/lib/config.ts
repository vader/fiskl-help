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
   * Create the GitHub Actions OIDC deploy role. Off until the account-level
   * OIDC provider exists - see docs/RUNBOOK.md. Deploys run from laptops via
   * scripts/deploy.sh until this is turned on.
   */
  readonly githubOidcRole: boolean;
}

/**
 * Read from environments.json rather than declared here, because the shell
 * scripts need the same account ids and profile names. One file both sides
 * read beats two lists that drift - and these particular values drifting means
 * a deploy pointed at the wrong AWS account.
 */
const ENVIRONMENTS: Record<EnvName, EnvConfig> = (() => {
  const file = path.join(__dirname, '..', 'environments.json');
  const raw = JSON.parse(fs.readFileSync(file, 'utf8')) as Record<string, Omit<EnvConfig, 'envName'>>;
  const built = {} as Record<EnvName, EnvConfig>;
  for (const envName of ['test', 'prod'] as const) {
    const entry = raw[envName];
    if (!entry) throw new Error(`environments.json is missing the "${envName}" entry`);
    built[envName] = { envName, ...entry };
  }
  return built;
})();

export function resolveEnv(value: unknown): EnvConfig {
  if (value !== 'test' && value !== 'prod') {
    throw new Error(`Missing or invalid context "env". Use: cdk deploy -c env=test|prod (got: ${JSON.stringify(value)})`);
  }
  return ENVIRONMENTS[value];
}

/** The GitHub repository allowed to assume the CI deploy role. */
export const GITHUB_REPO = 'fiskl-accounting/fiskl-help';
