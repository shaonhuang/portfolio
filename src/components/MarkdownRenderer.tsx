import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const MarkdownRenderer = (props: any) => {
  const { children } = props;
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>;
};

export default MarkdownRenderer;
