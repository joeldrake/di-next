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
import classNames from 'classnames';
import ScrollToTopButton from '@/components/ScrollToTopButton';

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
  let modifiers: any = { 'BlogPost--no-image': !image };

  const tagsArray = tags ? tags.split(',') : null;

  if (tagsArray) {
    tagsArray.forEach((tag) => {
      modifiers[`BlogPost--${tag}`] = true;
    });
  }

  modifiers = classNames(modifiers);
  return (
    <>
      <Header />
      <Head>
        <title>{post.title} — Drake Innovation</title>
        {post.image && <meta property="og:image" content={post.image.url} />}
        {post.excerpt && <meta name="description" content={post.excerpt} />}
      </Head>
      {preview && <PreviewBanner />}
      <div className={'BlogPost fadeIn ' + modifiers}>
        {router.isFallback ? (
          <div className={'BlogPost__loading'}>Loading…</div>
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
              <h1 className={'BlogPost__title'} dangerouslySetInnerHTML={{ __html: post.title }} />

              {post.date && (
                <p className={'BlogPost__subtitle'}>
                  <DateFormatter dateString={post.date} lang={post.lang} />
                  {post.author && <span>, {post.author}</span>}
                </p>
              )}

              <div
                className={'BlogPost__markdown'}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        )}

        <ScrollToTopButton />
      </div>

      <style jsx>{`
        .BlogPost {
          padding-bottom: 3rem;
          padding-top: 5rem;
        }

        .BlogPost--no-image {
          padding-top: 7.5rem;
        }

        .BlogPost__title {
          font-family: Times, 'Times New Roman', Serif;
          margin-top: 0;
          line-height: 1;
          font-size: 4rem;
          letter-spacing: -2px;
        }

        @media screen and (max-width: 768px) {
          .BlogPost {
            padding-top: 4rem;
          }
          .BlogPost--no-image {
            padding-top: 5rem;
          }
        }

        @media screen and (max-width: 600px) {
          .BlogPost__title {
            font-size: 3rem;
          }
        }

        .BlogPost__subtitle {
          margin-bottom: 2rem;
        }

        .BlogPost__markdown :global(h1),
        .BlogPost__markdown :global(h2),
        .BlogPost__markdown :global(h3) {
          font-family: Times, 'Times New Roman', Serif;
          line-height: 1;
          letter-spacing: -2px;
          margin: 2rem 0 1rem 0;
        }
        .BlogPost__markdown :global(h4) {
          line-height: 1;
          margin: 2rem 0 0.5rem 0;
        }

        .BlogPost__markdown :global(pre) {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .BlogPost__markdown :global(pre::-webkit-scrollbar) {
          display: none;
        }

        .BlogPost__markdown :global(table) {
          border-collapse: collapse;
        }
        .BlogPost__markdown :global(th) {
          padding: 0 1rem;
        }
        .BlogPost__markdown :global(td) {
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
        }

        .BlogPost__markdown :global(blockquote) {
          border-left: 5px solid var(--site-success);
          background-color: var(--site-success-lighter);
          margin: 0;
          padding: 0.1rem 1rem;
        }

        .BlogPost--recept .BlogPost__markdown pre {
          padding: 1rem;
        }

        .BlogPost--recept :global(p),
        .BlogPost--recept :global(li),
        .BlogPost--recept :global(table) {
          font-size: 1.125rem; /* 18px */
        }

        .BlogPost__markdown :global(p code) {
          background-color: var(--site-cyan-lighter);
          padding: 0.1rem 0.2rem;
        }
      `}</style>
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
