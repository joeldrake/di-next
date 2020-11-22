import Avatar from '@/components/blog/Avatar';
import DateFormatter from '@/components/DateFormatter';
import CoverImage from '@/components/blog/CoverImage';
import styles from '@/styles/HeroPost.module.css';
import Link from 'next/link';
import Author from '@/types/author';
import cn from 'classnames';

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
    <section className={styles.HeroPost}>
      <CoverImage title={title} src={coverImage} slug={slug} width={'2000'} height={'1000'} />

      <div
        className={cn(
          styles.HeroPost__inner,
          'siteSidePadding',
          'fadeIn',
          'siteWidth',
          'invisibleSideScrolling'
        )}
      >
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className={styles.HeroPost__link}>
            <h1 className={styles.HeroPost__headline}>{title}</h1>
            <p className={styles.HeroPost__excerpt}>{excerpt}</p>

            <div className="HeroPost__date">
              {author && <Avatar name={author.name} picture={author.picture} />}{' '}
              <DateFormatter dateString={date} />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeroPost;
