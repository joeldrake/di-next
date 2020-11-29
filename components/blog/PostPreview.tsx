import DateFormatter from '@/components/DateFormatter';
import styles from '@/styles/PostPreview.module.css';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  heroPost?: boolean;
};

const PostPreview = ({ title, coverImage, date, slug, heroPost }: Props) => {
  return (
    <div className={styles.PostPreview}>
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a className={styles.PostPreview__link}>
          <Image
            className={styles.PostPreview__image}
            src={coverImage}
            alt={title}
            width={960}
            height={480}
            sizes={'50%'}
          />
          {heroPost ? (
            <h2 className={styles.PostPreview__headline}>{title}</h2>
          ) : (
            <h3 className={styles.PostPreview__headline}>{title}</h3>
          )}
        </a>
      </Link>
      <div className={styles.PostPreview__date}>
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default PostPreview;
