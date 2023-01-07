import { useState } from 'react';
import * as allIcons from 'tabler-icons-react';
import MarkdownRenderer from './MarkdownRenderer';

interface dataProps {
  img: string;
  date: string;
  title: string;
  md: string;
  tag: Array<string>;
}

interface TagProps {
  content: string;
  Icon?: string;
}
const Tag = ({ content, Icon }: TagProps) => {
  // @ts-ignore
  const Item = Icon ? allIcons[Icon] : undefined;
  return (
    <div className="bg-slate-200 rounded-3xl px-3 whitespace-nowrap">
      {content}
      {Item ? <Item className="inline-block" size="1em" /> : <></>}
    </div>
  );
};
// FIXME: fix any
function ProjectBlock({ data }: { data: any }) {
  const [project, setProject] = useState('');
  fetch(data.md)
    .then((response) => {
      return response.text();
    })
    .then((text) => setProject(text));
  return (
    <div className="flex flex-wrap justify-center py-5 prose lg:prose-xl">
      <div className="basis-1/3">
        <p>{data.title}</p>
        <p style={{ fontSize: '14px', color: 'gray' }}>{data.date}</p>
        {data.img ? (
          <div style={{ padding: '10px 0px' }}>
            <img
              src={data.img}
              alt={data.title}
              width="100px"
              className="mx-auto"
            />
          </div>
        ) : (
          <></>
        )}
        <br />
      </div>
      <div className="basis-2/3 text-left">
        <MarkdownRenderer>{project}</MarkdownRenderer>
        <div className="flex gap-2 flex-wrap">
          {data.tag?.map((data: string, id: number) => (
            <Tag content={data} Icon={`Brand${data}`} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
