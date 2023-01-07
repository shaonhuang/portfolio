import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Box, Circle, Highlight, Underline } from './Annotation';

const MarkdownRenderer = (props: any) => {
  const { children } = props;
  const components: any = {
    highlight: Highlight,
    underline: Underline,
    box: Box,
    circle: Circle,
  };
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
