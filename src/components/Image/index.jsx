import React from 'react';
import Link from '@docusaurus/Link';

const Image = ({ src, width, height, referenceLink, description }) => {
  return (
    <div>
      <img
        src={src}
        style={{
          width,
          height,
          display: 'block',
          margin: 'auto',
        }}
      />
      {/* <br /> */}

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
          {description}
        </Link>
      )}
    </div>
  );
};

export default Image;
