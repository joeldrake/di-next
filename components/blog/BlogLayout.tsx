import BlogFooter from '@/components/blog/BlogFooter';
import Meta from '@/components/Meta';
import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="BlogLayout">{children}</div>
      <BlogFooter />
    </>
  );
};

export default Layout;
