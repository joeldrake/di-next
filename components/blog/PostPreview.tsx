import { useRouter } from 'next/router';

import DateFormatter from '@/components/DateFormatter';
import styles from '@/styles/PostPreview.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';

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
  const router: any = useRouter();
  const tagsArray = tags ? tags.split(',') : null;

  const langTag = (lang: string) => {
    return (
      <span role="img" aria-label={lang}>
        {lang === 'sv' ? `🇸🇪` : `🇬🇧`}
      </span>
    );
  };

  const handleTagClick = ({ e, tag }: any) => {
    router.push({
      pathname: '/blog',
      query: { tag },
    });

    const blogFilter = document.getElementById('blogFilter');

    if (blogFilter) {
      window.scrollTo({
        top: blogFilter.offsetTop - 16,
        behavior: 'smooth',
      });
    }
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

          <h2 className={cx('PostPreview__headline')} dangerouslySetInnerHTML={{ __html: title }} />
        </a>
      </Link>
      {date && (
        <div className={cx('PostPreview__date')}>
          <DateFormatter dateString={date} />
        </div>
      )}
      {(tagsArray || lang) && (
        <div className={cx('PostPreview__tags')}>
          {lang && (
            <Tag onClick={(e: any) => handleTagClick({ e, tag: lang })}>{langTag(lang)}</Tag>
          )}
          {tagsArray &&
            tagsArray.map((tag, i) => (
              <Tag onClick={(e: any) => handleTagClick({ e, tag })} key={i}>
                {tag}
              </Tag>
            ))}
        </div>
      )}
    </div>
  );
};

export default PostPreview;
