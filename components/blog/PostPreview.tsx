import DateFormatter from '@/components/DateFormatter';
import styles from '@/styles/PostPreview.module.css';
import Link from 'next/link';

// remove for static ixport
// import Image from 'next/image';

type Props = {
  title: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  date: string;
  slug: string;
  heroPost?: boolean;
};

const PostPreview = ({ title, image, date, slug, heroPost }: Props) => {
  return (
    <div className={styles.PostPreview}>
      <hr />
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a className={styles.PostPreview__link}>
          {image && (
            <img
              className={styles.PostPreview__image}
              src={image.url}
              alt={title}
              width={image.width || 960}
              height={image.height || 480}
              sizes={'50%'}
            />
          )}

          <h2 className={styles.PostPreview__headline}>{title}</h2>
        </a>
      </Link>
      {date && (
        <div className={styles.PostPreview__date}>
          <DateFormatter dateString={date} />
        </div>
      )}
    </div>
  );
};

export default PostPreview;
