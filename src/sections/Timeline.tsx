import { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SectionTitle from '../components/SectionTitle';

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
    <section ref={(cur: HTMLElement) => (scrollRef.current[4] = cur)}>
      <SectionTitle title="Timeline" />
      <div className="text-left prose lg:prose-xl">
        <MarkdownRenderer>{project}</MarkdownRenderer>
      </div>
    </section>
  );
}

export default Timeline;
