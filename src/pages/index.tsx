import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MOZI from '@site/static/img/mozi.svg';

import { useA2HS } from '../hooks/useA2HS';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const {} = useA2HS();
  return (
    <Layout title={'면접'} description="Interview Note">
      <main className="p-2">
        <p className="p-2">면접 노트입니다.</p>
        {/* <Link to={'docs/operating-system/면접/프로세스와%20스레드/process-vs-thread'}> */}
        {/* <div className={styles.box}> */}
        {/* <DropMOZI /> */}
        {/* </div> */}
        {/* </Link> */}
      </main>
    </Layout>
  );
}

function DropMOZI() {
  return <MOZI height="300px" width="500px" />;
}
