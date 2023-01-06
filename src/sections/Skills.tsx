import * as allIcons from 'tabler-icons-react';
// debugger
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

interface tag {
  content: string;
  icon?: string;
}
const skillsData = [
  {
    aspect: 'Language',
    tags: [
      { content: 'Typescript', icon: 'BrandTypescript' },
      { content: 'Javascript', icon: 'BrandJavascript' },
      { content: 'Python', icon: 'BrandPython' },
    ],
  },
  {
    aspect: 'Frontend',
    tags: [
      { content: 'React', icon: 'BrandReact' },
      { content: 'Vue', icon: 'BrandVue' },
      { content: 'HTML', icon: 'BrandHtml5' },
      { content: 'CSS', icon: 'BrandCss3' },
    ],
  },
  {
    aspect: 'Backend',
    tags: [{ content: 'Django', icon: 'BrandDjango' }],
  },
  {
    aspect: 'Design',
    tags: [
      { content: 'Photoshop' },
      { content: 'Illustrator' },
      { content: 'Sketch', icon: 'BrandSketch' },
    ],
  },
  {
    aspect: 'Tools',
    tags: [
      { content: 'Git', icon: 'BrandGit' },
      { content: 'Stack', icon: 'BrandSlack' },
    ],
  },
];

export const Skills = ({
  scrollRef,
}: {
  scrollRef: {
    current: Array<HTMLElement>;
  };
}) => (
  <section
    ref={(cur: HTMLElement) => {
      if (cur) {
        scrollRef.current[2] = cur;
      }
    }}
  >
    <p className="handwriting text-2xl">Skills</p>
    <table className="flex flex-col items-start prose lg:prose-xl text-left justify-start px-auto grow">
      <tbody className="w-full">
        {skillsData
          .map((item, idx) => (
            <tr key={idx}>
              <th className="my-auto">{item.aspect}:</th>
              <td className="flex gap-2 flex-wrap">
                {item.tags.reduce(
                  (acc: JSX.Element[], p: tag) => [
                    ...acc,
                    <Tag
                      content={p.content}
                      Icon={p.icon}
                      key={p.content}
                    ></Tag>,
                  ],
                  []
                )}
              </td>
            </tr>
          ))
          .reduce((acc: JSX.Element[], p) => [...acc, p], [])}
      </tbody>
    </table>
  </section>
);
