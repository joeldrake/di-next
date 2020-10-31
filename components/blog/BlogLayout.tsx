import PreviewBanner from '@/components/PreviewBanner';
import Footer from '@/components/blog/BlogFooter';
import Meta from '@/components/Meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="BlogLayout">
        {preview && <PreviewBanner />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
