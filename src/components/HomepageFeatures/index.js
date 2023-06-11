import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Fully open source',
        Svg: require('@site/static/img/undraw_open_source.svg').default,
        description: (
          <>
            We release all our project design files with a permissive
            open source license, giving the user full ownership.
          </>
        ),
    },
    {
        title: 'Available at no cost',
        Svg: require('@site/static/img/undraw_free.svg').default,
        description: (
          <>
            We provide access to our hardware, firmware, and software
            design files at no cost to you so you can build your own. We also sell
            fully built hardware in our shop to make it easier to get up and running.
          </>
        ),
    },
    {
        title: 'Sharing knowledge',
        Svg: require('@site/static/img/undraw_sharing_knowledge.svg').default,
        description: (
          <>
            Along with our designs, you can find in-depth documentation and guides explaining how to build and use our projects.
          </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
