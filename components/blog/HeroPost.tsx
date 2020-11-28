import Avatar from '@/components/blog/Avatar';
import DateFormatter from '@/components/DateFormatter';
import styles from '@/styles/HeroPost.module.css';
import Link from 'next/link';
import Author from '@/types/author';
import cn from 'classnames';
import Image from 'next/image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <section className={cn(styles.HeroPost, 'siteSidePadding', 'fadeIn', 'siteWidth')}>
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a className={styles.HeroPost__link}>
          <Image
            className={styles.HeroPost__image}
            src={coverImage}
            alt={title}
            width={960}
            height={480}
            sizes={'50%'}
          />

          <h2 className={styles.HeroPost__headline}>{title}</h2>

          <div className="HeroPost__date">
            {author && <Avatar name={author.name} picture={author.picture} />}{' '}
            <DateFormatter dateString={date} />
          </div>
        </a>
      </Link>
    </section>
  );
};

export default HeroPost;
