type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags?: [string];
  lang?: string;
};

export default PostType;
