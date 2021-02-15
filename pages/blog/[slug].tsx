import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '@/utils/api';
import Head from 'next/head';
import markdownToHtml from '@/utils/markdownToHtml';
import PostType from '@/types/post';
import PreviewBanner from '@/components/PreviewBanner';
import Header from '@/components/Header';
import DateFormatter from '@/components/DateFormatter';
import CoverImage from '@/components/blog/CoverImage';

import styles from '@/styles/BlogPost.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type Props = {
  post: PostType;
  preview?: boolean;
};

const BlogPost = ({ post, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { image, tags } = post;
  const modifiers: any = { 'BlogPost--no-image': !image };

  const tagsArray = tags ? tags.split(',') : null;

  if (tagsArray) {
    tagsArray.forEach((tag) => {
      modifiers[`BlogPost--${tag}`] = true;
    });
  }
  return (
    <>
      <Header />
      <Head>
        <title>{post.title} — Drake Innovation</title>
        {post.image && <meta property="og:image" content={post.image.url} />}
        {post.excerpt && <meta name="description" content={post.excerpt} />}
      </Head>
      {preview && <PreviewBanner />}
      <div className={cx('BlogPost', 'fadeInFromRight', modifiers)}>
        {router.isFallback ? (
          <div className={cx('BlogPost__loading')}>Loading…</div>
        ) : (
          <article>
            {post.image && (
              <CoverImage
                title={post.title}
                src={post.image.url}
                width={`${post.image.width}` || '2000'}
                height={`${post.image.height}` || '1000'}
              />
            )}

            <div className={'siteWidth siteSidePadding'}>
              <h1
                className={cx('BlogPost__title')}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              {post.date && (
                <p className={cx('BlogPost__subtitle')}>
                  <DateFormatter dateString={post.date} />
                  {post.author && <span>, {post.author}</span>}
                </p>
              )}

              <div
                className={cx('BlogPost__markdown')}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogPost;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'excerpt',
    'slug',
    'author',
    'content',
    'image',
    'tags',
    'lang',
  ]);
  const content = typeof post.content === 'string' ? await markdownToHtml(post.content) : '';

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
