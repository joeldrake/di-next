import markdownStyles from '@/styles/markdown.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="postBody">
      <div className={'siteWidth siteSidePadding'}>
        <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default PostBody;
