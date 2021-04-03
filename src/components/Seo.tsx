import React from 'react';
import Head from 'next/head';
import { __TITLE__ } from 'constanst/head';

interface SeoProps {
  title?: string;
}
const Seo: React.FC<SeoProps> = ({ title }) => (
  <Head>
    <title>{`${title ? `${title} | ` : ''}${__TITLE__}`}</title>
  </Head>
);

export default Seo;
