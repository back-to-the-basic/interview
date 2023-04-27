import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MOZI from '@site/static/img/mozi.svg';

import styles from './index.module.css';
import { useA2HS } from '../hooks/useA2HS';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const {} = useA2HS();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <main>
        <Link to={'docs/operating-system/면접/프로세스와%20스레드/process-vs-thread'}>
          <div className={styles.box}>
            <DropMOZI />
          </div>
        </Link>
      </main>
    </Layout>
  );
}

function DropMOZI() {
  return <MOZI height="300px" width="500px" />;
}
