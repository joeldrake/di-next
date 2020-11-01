import Container from '@/components/Container';
import MoreStories from '@/components/blog/MoreStories';
import HeroPost from '@/components/blog/HeroPost';
import Intro from '@/components/blog/BlogIntro';
import BlogLayout from '@/components/blog/BlogLayout';
import { getAllPosts } from '@/lib/api';
import Head from 'next/head';
import Post from '@/types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <BlogLayout>
      <Head>
        <title>Drake Innovation</title>
      </Head>
      <div className={'BlogStart'}>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </BlogLayout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
