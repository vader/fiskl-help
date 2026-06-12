import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    to: '/getting-started/overview',
    description: (
      <>
        Set up your company profile, connect your bank, import your data, and
        send your first invoice.
      </>
    ),
  },
  {
    title: 'Invoicing & Quotes',
    to: '/invoicing/overview',
    description: (
      <>
        Create professional invoices and quotes, schedule recurring billing,
        and get paid online.
      </>
    ),
  },
  {
    title: 'Banking & Accounting',
    to: '/accounting/overview',
    description: (
      <>
        Sync your bank feeds, reconcile transactions, and keep your ledger and
        reports accurate.
      </>
    ),
  },
];

function Feature({title, description, to}: FeatureItem) {
  return (
    <Link to={to} className={styles.featureCard}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {FeatureList.map((props) => (
          <Feature key={props.to} {...props} />
        ))}
      </div>
    </section>
  );
}
