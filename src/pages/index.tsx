import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { useA2HS } from '../hooks/useA2HS';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const {} = useA2HS();
  return (
    <Layout title="면접" description="Interview Note">
      <main className="p-2 ">
        <div style={{ padding: '1rem' }}>
          <p>정답도 중요해. 근데 정답으로 가는 과정도 중요해(질문이 정답보다 중요하다)</p>
          룰.
          <br />- 출처를 남긴다.
          <br />-
        </div>
        {/* <Link to={'docs/operating-system/면접/프로세스와%20스레드/process-vs-thread'}> */}
        {/* <div className={styles.box}> */}
        {/* </div> */}
        {/* </Link> */}
      </main>
    </Layout>
  );
}
