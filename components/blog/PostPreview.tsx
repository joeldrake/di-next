import Avatar from '@/components/blog/Avatar';
import DateFormatter from '@/components/DateFormatter';
import CoverImage from '@/components/blog/CoverImage';
import Link from 'next/link';
import Author from '@/types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <div className={'PostPreview'}>
      <div className="siteWidth">
        <CoverImage slug={slug} title={title} src={coverImage} width={2000} height={1000} />

        <h3 className="PostPreview__headline">
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
          </Link>
        </h3>
        <div className="PostPreview__date">
          <DateFormatter dateString={date} />
        </div>
        <p className="PostPreview__excerpt">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
};

export default PostPreview;
