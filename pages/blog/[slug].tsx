import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { getPostBySlug, getAllPosts } from '@/lib/api';
import Head from 'next/head';
import markdownToHtml from '@/lib/markdownToHtml';
import PostType from '@/types/post';
import PreviewBanner from '@/components/PreviewBanner';
import Header from '@/components/Header';
import Avatar from '@/components/blog/Avatar';
import DateFormatter from '@/components/DateFormatter';
import CoverImage from '@/components/blog/CoverImage';
import styles from '@/styles/BlogPost.module.css';

type Props = {
  post: PostType;
  preview?: boolean;
};

const BlogPost = ({ post, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Header />
      <Head>
        <title>{post.title} || Drake Innovation</title>
        <meta property="og:image" content={post.coverImage} />
        <link rel="shortcut icon" href="/images/dragon.png" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content={post.excerpt} />
      </Head>
      {preview && <PreviewBanner />}
      <div className={styles.BlogPost}>
        {router.isFallback ? (
          <div className={styles.BlogPost__loading}>Loading…</div>
        ) : (
          <article>
            <CoverImage title={post.title} src={post.coverImage} width={'2000'} height={'1000'} />

            <div className={'siteWidth siteSidePadding'}>
              <h1 className={styles.BlogPost__title}>{post.title}</h1>

              <p className={styles.BlogPost__subtitle}>
                <DateFormatter dateString={post.date} />
                {post.author && <span>, {post.author}</span>}
              </p>

              <div
                className={styles.BlogPost__markdown}
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
    'ogImage',
    'coverImage',
    'tags',
    'lang',
  ]);
  const content = await markdownToHtml(post.content || '');
  const tags = post.tags ? post.tags.split(',') : null;

  return {
    props: {
      post: {
        ...post,
        content,
        tags,
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
