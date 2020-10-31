import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/dragon.png" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content="Drake Innovation" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};

export default Meta;
