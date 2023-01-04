import { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

function Timeline({
  scrollRef,
}: {
  scrollRef: {
    current: Array<HTMLElement>;
  };
}) {
  const markdown = require('../markdown/timeline.md');
  const [project, setProject] = useState('');
  fetch(markdown)
    .then((response) => {
      return response.text();
    })
    .then((text) => setProject(text));
  return (
    <section ref={(cur:HTMLElement) => (scrollRef.current[4] = cur)}>
      Timeline
      <MarkdownRenderer>{project}</MarkdownRenderer>
    </section>
  );
}

export default Timeline;
