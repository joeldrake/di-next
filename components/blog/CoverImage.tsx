import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/CoverImage.module.css';

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
    <div className={styles.CoverImage}>
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
