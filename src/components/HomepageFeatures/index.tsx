import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Standards Coverage',
    description: (
      <>
        29 IAM standards documented across 9 functional areas - from OAuth 2.0 and OpenID Connect
        to emerging standards like DIDs and Verifiable Credentials. Each standard includes plain-language
        summaries, technical details, industry usage, and compliance mapping.
      </>
    ),
  },
  {
    title: 'Industry-Specific Guidance',
    description: (
      <>
        Tailored guidance for Financial Services (FAPI, PSD2), Healthcare (SMART on FHIR, HIPAA),
        and Government (iGov, NIST 800-63). Decision trees help you quickly answer
        "Which authentication standard should I use?"
      </>
    ),
  },
  {
    title: 'Vendor-Agnostic & Open',
    description: (
      <>
        Focused on open standards and open-source implementations, not proprietary solutions.
        References official specifications (IETF RFCs, W3C Recommendations) with historical
        context showing how standards evolved from 1988 to 2025.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
