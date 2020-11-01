import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import PostBody from '@/components/blog/PostBody';
import PostHeader from '@/components/blog/PostHeader';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import PostTitle from '@/components/blog/PostTitle';
import Head from 'next/head';
import markdownToHtml from '@/lib/markdownToHtml';
import PostType from '@/types/post';
import PreviewBanner from '@/components/PreviewBanner';
import Meta from '@/components/Meta';
import Header from '@/components/Header';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const BlogPost = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Meta />
      <Header />
      <div className={'BlogPost'}>
        {preview && <PreviewBanner />}
        {router.isFallback ? (
          <div className={'BlogPost__loading'}>Loading…</div>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{post.title} | Drake Innovation</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
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
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

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
