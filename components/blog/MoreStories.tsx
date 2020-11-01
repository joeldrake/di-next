import PostPreview from '@/components/blog/PostPreview';
import Post from '@/types/post';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className={'MoreStories'}>
      <div className="siteWidth siteSidePadding">
        <h2 className={'MoreStories__headline'}>More Stories</h2>

        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
