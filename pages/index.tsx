import Header from '@/components/Header';
import About from '@/components/presentation/About';
import Contact from '@/components/presentation/Contact';
import Start from '@/components/presentation/Start';
import Work from '@/components/presentation/Work';

const Index = () => {
  return (
    <div className={'Main'}>
      <Header />
      <Start />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;
