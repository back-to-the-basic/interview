import React from 'react';
import Link from '@docusaurus/Link';

const Image = ({ src, size, referenceLink }) => {
  return (
    <div style={{ padding: 'auto', margin: 'auto' }}>
      <img
        src={src}
        width={size}
        height={size}
        style={{
          display: 'block',
          margin: 'auto',
        }}
      />
      <br />

      {referenceLink && (
        <Link
          to={referenceLink}
          style={{
            width: '100%',
            display: 'block',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          그림 출처
        </Link>
      )}
    </div>
  );
};

export default Image;
