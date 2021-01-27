type PostType = {
  slug: string;
  title: string;
  date: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  author: string;
  excerpt?: string;
  content: string;
  tags?: [string];
  lang?: string;
};

export default PostType;
