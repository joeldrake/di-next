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

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <section className={'HeroPost'}>
      <div className="siteWidth siteSidePadding">
        <CoverImage title={title} src={coverImage} slug={slug} width={'2000'} height={'1000'} />

        <h3 className="HeroPost__headline">
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
          </Link>
        </h3>
        <div className="HeroPost__date">
          <DateFormatter dateString={date} />
        </div>

        <p className="HeroPost__excerpt">{excerpt}</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </section>
  );
};

export default HeroPost;
