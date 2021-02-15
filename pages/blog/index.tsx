import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllPosts } from '@/utils/api';
import Post from '@/types/post';
import Header from '@/components/Header';
import PostPreview from '@/components/blog/PostPreview';
import Contact from '@/components/presentation/Contact';

import styles from '@/styles/BlogStart.module.css';
import classNames from 'classnames/bind';
import Input from '@/components/Input';
import Tag from '@/components/Tag';

const cx = classNames.bind(styles);

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const router: any = useRouter();
  const filterTag = router.query.tag;

  const [filter, setFilter] = useState('');

  const removeTag = () => {
    router.push({
      pathname: '/blog',
    });

    const blogFilter = document.getElementById('blogFilter');
    if (!blogFilter) return;
    // because of position relative
    const targetParent = blogFilter.closest('div');
    if (!targetParent) return;

    window.scrollTo({
      top: targetParent.offsetTop - 16,
      behavior: 'smooth',
    });
  };

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const handleFilterClear = () => {
    setFilter('');
  };

  const hasFilter = filter && filter.length;

  allPosts = allPosts.filter((post) => {
    if (post.hidden) return false;

    if (filterTag) {
      if (filterTag.length === 2) {
        // treat as lang
        return post.lang === filterTag;
      } else {
        const tagsArray = post.tags ? post.tags.split(',') : null;
        if (!tagsArray) return false;
        return tagsArray.includes(filterTag);
      }
    }
    return true;
  });
  if (hasFilter) {
    allPosts = allPosts.filter((post) => {
      return post.title.toUpperCase().includes(filter.toUpperCase());
    });
  }

  const noHero = filterTag || hasFilter;

  const heroPost = noHero ? null : allPosts[0];
  const posts = noHero ? allPosts : allPosts.slice(1);

  let title = 'Drake Innovation';
  if (filterTag) {
    title = filterTag[0].toUpperCase() + filterTag.substring(1);
    if (filterTag != 'recept') title += ` – Drake Innovation`;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div
        className={cx('BlogStart', 'fadeIn', 'siteSidePadding', 'siteWidth', {
          'BlogStart--noHero': noHero,
        })}
      >
        <div className={cx('BlogStart__top')}>
          <h1 className={cx('BlogStart__headline')}>Le Blog</h1>
          <div className={cx('BlogStart__subtitle')}>
            A collection of things I want to share with the internet
          </div>
        </div>

        <Input
          id="blogFilter"
          onClear={handleFilterClear}
          onChange={handleFilterChange}
          value={filter}
          placeholder="Filter"
        />

        {filterTag && (
          <div className={cx('BlogStart__filter')}>
            <img
              src="/images/filter.svg"
              width="24"
              height="24"
              alt="Back"
              aria-label="Filtering on these tags"
              className={cx('BlogStart__filter-icon')}
            />
            <Tag onClose={removeTag}>
              {filterTag.length === 2 ? (filterTag === 'sv' ? `🇸🇪` : `🇬🇧`) : filterTag}
            </Tag>
          </div>
        )}

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
