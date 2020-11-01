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
      <div className="siteWidth">
        <CoverImage title={title} src={coverImage} slug={slug} />

        <h3 className="HeroPost__headline">
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="HeroPost__date">
          <DateFormatter dateString={date} />
        </div>

        <div className="HeroPost__excerpt">
          <p>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
