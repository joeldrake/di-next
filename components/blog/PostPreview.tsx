import DateFormatter from '@/components/DateFormatter';
import styles from '@/styles/PostPreview.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Link from 'next/link';
import Image from 'next/image';

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
  tags?: string;
  lang?: string;
};

const PostPreview = ({ title, image, date, slug, tags, lang }: Props) => {
  const tagsArray = tags ? tags.split(',') : null;

  const langTag = (lang: string) => {
    return (
      <span role="img" aria-label={lang}>
        {lang === 'sv' ? `🇸🇪` : `🇬🇧`}
      </span>
    );
  };

  return (
    <div className={cx('PostPreview')}>
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a className={cx('PostPreview__link')}>
          {image && (
            <Image
              className={cx('PostPreview__image')}
              src={image.url}
              alt={title}
              width={image.width || 960}
              height={image.height || 480}
              sizes={'50%'}
            />
          )}

          <h2 className={cx('PostPreview__headline')}>{title}</h2>
        </a>
      </Link>
      {date && (
        <div className={cx('PostPreview__date')}>
          <DateFormatter dateString={date} />
        </div>
      )}
      {(tagsArray || lang) && (
        <div className={cx('PostPreview__tags')}>
          {lang && <div className={cx('PostPreview__tag')}>{langTag(lang)}</div>}
          {tagsArray &&
            tagsArray.map((tag, i) => (
              <div key={i} className={cx('PostPreview__tag')}>
                {tag}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PostPreview;
