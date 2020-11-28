import Header from '@/components/Header';
import About from '@/components/presentation/About';
import Contact from '@/components/presentation/Contact';
import Start from '@/components/presentation/Start';
import Work from '@/components/presentation/Work';
import Head from 'next/head';

const Index = () => {
  return (
    <div className={'Main'}>
      <Head>
        <title>Drake Innovation</title>
        <meta name="description" content="Drake Innovation" />
        <meta property="og:image" content={'/images/joeldrake.jpg'} />
      </Head>
      <Header />
      <Start />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;
