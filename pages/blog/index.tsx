import MoreStories from '@/components/blog/MoreStories';
import HeroPost from '@/components/blog/HeroPost';
import styles from '@/styles/BlogStart.module.css';
import { getAllPosts } from '@/lib/api';
import Head from 'next/head';
import Post from '@/types/post';
import Header from '@/components/Header';
import cn from 'classnames';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <div className={styles.BlogStart}>
      <Head>
        <title>Drake Innovation</title>
        <meta name="description" content="Drake Innovation" />
        <meta property="og:image" content={'/images/joeldrake.jpg'} />
      </Head>

      <Header />

      <div className={cn(styles.BlogStart, 'siteSidePadding', 'fadeIn', 'siteWidth')}>
        <div className={styles.BlogStart__top}>
          <h1 className={styles.BlogStart__headline}>Le Blog</h1>
        </div>
      </div>

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
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
