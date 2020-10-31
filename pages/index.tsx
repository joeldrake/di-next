import Header from '@/components/presentation/Header';
import About from '@/components/presentation/About';
import Contact from '@/components/presentation/Contact';
import Start from '@/components/presentation/Start';
import Work from '@/components/presentation/Work';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Drake Innovation</title>
      </Head>
      <Header />
      <Start />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Index;
