import { useState } from 'react';

import { getAllPosts } from '@/utils/api';
import Head from 'next/head';
import Post from '@/types/post';
import Header from '@/components/Header';
import PostPreview from '@/components/blog/PostPreview';
import Contact from '@/components/presentation/Contact';

import styles from '@/styles/BlogStart.module.css';
import classNames from 'classnames/bind';
import Input from '@/components/Input';

const cx = classNames.bind(styles);

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const [filter, setFilter] = useState('');
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const hasFilter = filter && filter.length;

  allPosts = allPosts.filter((post) => {
    if (post.hidden) return false;

    if (hasFilter) {
      return post.title.toUpperCase().includes(filter.toUpperCase());
    }

    return true;
  });

  const heroPost = hasFilter ? null : allPosts[0];
  const posts = hasFilter ? allPosts : allPosts.slice(1);

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
            A collection of things I want to share with the internet
          </div>
        </div>

        <Input onChange={handleFilterChange} value={filter} placeholder="Filter" />

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
        {!heroPost && !posts.length && (
          <div className={cx('BlogStart__noPosts')}>
            <span
              role="img"
              aria-label={'No posts found emoji'}
              className={cx('BlogStart__noPosts-emoji')}
            >
              🤷‍♂️
            </span>
            <div>No posts found</div>
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
    props: {
      allPosts,
    },
  };
};
