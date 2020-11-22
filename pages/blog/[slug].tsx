import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import markdownStyles from '@/styles/markdown.module.css';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import Head from 'next/head';
import markdownToHtml from '@/lib/markdownToHtml';
import PostType from '@/types/post';
import PreviewBanner from '@/components/PreviewBanner';
import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Avatar from '@/components/blog/Avatar';
import DateFormatter from '@/components/DateFormatter';
import CoverImage from '@/components/blog/CoverImage';

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
      <Meta />
      <Header />
      {preview && <PreviewBanner />}
      <div className={'BlogPost'}>
        {router.isFallback ? (
          <div className={'BlogPost__loading'}>Loading…</div>
        ) : (
          <article>
            <Head>
              <title>{post.title} | Drake Innovation</title>
              <meta property="og:image" content={post.coverImage} />
            </Head>

            <CoverImage title={post.title} src={post.coverImage} width={'2000'} height={'1000'} />

            <div className={'siteWidth siteSidePadding'}>
              <h1>{post.title}</h1>

              {post.author && <Avatar name={post.author.name} picture={post.author.picture} />}

              <div className="PostHeader__date">
                <DateFormatter dateString={post.date} />
              </div>

              <div
                className={markdownStyles['markdown']}
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
