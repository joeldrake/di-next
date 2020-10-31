import Link from 'next/link';

const Header = () => {
  return (
    <h2 className="BlogHeader">
      <Link href="/">
        <a className="BlogHeader__title">Blog</a>
      </Link>
    </h2>
  );
};

export default Header;
