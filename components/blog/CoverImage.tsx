import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  width: string;
  height: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug, width, height }: Props) => {
  const image = <Image src={src} alt={title} width={width} height={height} sizes={'50%'} />;
  return (
    <div className="CoverImage">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
