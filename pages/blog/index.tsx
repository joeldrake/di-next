import { getAllPosts } from '@/lib/api';
import Head from 'next/head';
import Post from '@/types/post';
import Header from '@/components/Header';
import PostPreview from '@/components/blog/PostPreview';
import Contact from '@/components/presentation/Contact';

import styles from '@/styles/BlogStart.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const posts = allPosts.slice(1).filter((post) => !post.hidden);

  return (
    <>
      <Head>
        <title>Drake Innovation</title>
        <meta name="description" content="Drake Innovation" />
        <meta property="og:image" content={'/images/joeldrake.jpg'} />
      </Head>
      <Header />
      <div className={cx('BlogStart', 'siteSidePadding', 'fadeIn', 'siteWidth')}>
        <div className={cx('BlogStart__top')}>
          <h1 className={cx('BlogStart__headline')}>Le Blog</h1>
          <div className={cx('BlogStart__subtitle')}>
            A collection of different things I want to share with the internet
          </div>
        </div>

        {heroPost && (
          <div className={cx('BlogStart__heroPost')}>
            <PostPreview
              title={heroPost.title}
              image={heroPost.image}
              date={heroPost.date}
              slug={heroPost.slug}
              tags={heroPost.tags}
              lang={heroPost.lang}
              heroPost
            />
          </div>
        )}
        {posts.length > 0 && (
          <div className={cx('BlogStart__morePosts')}>
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                image={post.image}
                date={post.date}
                slug={post.slug}
                tags={post.tags}
                lang={post.lang}
              />
            ))}
          </div>
        )}
      </div>
      <Contact />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'image', 'tags', 'lang']);

  return {
    props: { allPosts },
  };
};
