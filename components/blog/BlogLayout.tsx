import PreviewBanner from '@/components/PreviewBanner';
import Footer from '@/components/blog/BlogFooter';
import Meta from '@/components/Meta';
import Header from '@/components/Header';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="BlogLayout">
        {preview && <PreviewBanner />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
