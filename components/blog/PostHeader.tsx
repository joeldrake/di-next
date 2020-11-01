import Avatar from '@/components/blog/Avatar';
import DateFormatter from '@/components/DateFormatter';
import CoverImage from '@/components/blog/CoverImage';
import PostTitle from '@/components/blog/PostTitle';
import Author from '@/types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className={'PostHeader'}>
      <div className={'siteWidth siteSidePadding'}>
        <PostTitle>{title}</PostTitle>

        <Avatar name={author.name} picture={author.picture} />

        <CoverImage title={title} src={coverImage} width={2000} height={1000} />

        <div className="PostHeader__date">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
