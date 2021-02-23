import Head from 'next/head';
import Header from '@/components/Header';
import About from '@/components/presentation/About';
import Contact from '@/components/presentation/Contact';
import Start from '@/components/presentation/Start';
import Work from '@/components/presentation/Work';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <div className={'Main'}>
      <Head>
        <title>Drake Innovation</title>
      </Head>
      <Header />
      <Start />
      <About />
      <Work />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
