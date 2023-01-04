import { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

import type { TablerIcon } from '@tabler/icons';

interface TagProps {
  content: string;
  Icon?: TablerIcon;
}
interface dataProps {
  img: string;
  date: string;
  title: string;
  md: string;
  tag: Array<string>;
}
const Tag = ({ content, Icon }: TagProps) => (
  <span>
    {content}
    {Icon ? <Icon className="inline-block" size="1em" /> : <></>}
  </span>
);
// TODO: fix any
function ProjectBlock({ data }: { data: any }) {
  const [project, setProject] = useState('');
  fetch(data.md)
    .then((response) => {
      return response.text();
    })
    .then((text) => setProject(text));
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px 0px',
      }}
    >
      <div style={{ width: '250px' }}>
        <p>{data.title}</p>
        <p style={{ fontSize: '14px', color: 'gray' }}>{data.date}</p>
        {data.img ? (
          <div style={{ padding: '10px 0px' }}>
            <img src={data.img} alt={data.title} width="100px" />
          </div>
        ) : (
          <></>
        )}
        <br />
      </div>
      <div style={{ maxWidth: '500px' }}>
        <MarkdownRenderer>{project}</MarkdownRenderer>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '15px',
          }}
        >
          {data.tag?.map((data: string) => (
            <Tag content={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;