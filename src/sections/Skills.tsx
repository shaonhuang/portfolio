import type { TablerIcon } from '@tabler/icons';
import {
  IconBrandCss3,
  IconBrandDjango,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandSketch,
  IconBrandSlack,
  IconBrandTypescript,
  IconBrandVue,
} from '@tabler/icons';
interface TagProps {
  content: string;
  Icon?: TablerIcon;
}
const Tag = ({ content, Icon }: TagProps) => (
  <span>
    {content}
    {Icon ? <Icon className="inline-block" size="1em" /> : <></>}
  </span>
);

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
    className="flex flex-col w-full"
  >
    <p className="handwriting text-2xl">Skills</p>
    <div className="flex flex-col items-start prose lg:prose-xl text-left justify-start px-auto grow">
      <p>
        <span>Language:</span>
        <Tag content="Typescript" Icon={IconBrandTypescript}></Tag>
        <Tag content="Javascript" Icon={IconBrandJavascript}></Tag>
        <Tag content="Python" Icon={IconBrandPython}></Tag>
      </p>
      <p>
        <span>Frontend:</span> <Tag content="React" Icon={IconBrandReact}></Tag>
        <Tag content="Vue" Icon={IconBrandVue}></Tag>
        <Tag content="HTML" Icon={IconBrandHtml5}></Tag>
        <Tag content="CSS" Icon={IconBrandCss3}></Tag>
      </p>
      <p>
        <span>Backend:</span>
        <Tag content="Django" Icon={IconBrandDjango}></Tag>
      </p>
      <p>
        <span>Design:</span>
        <Tag content="Photoshop"></Tag>
        <Tag content="illustrator"></Tag>
        <Tag content="Sketch"></Tag>
      </p>
      <p>
        <span>Tools:</span>
        <Tag content="Git" Icon={IconBrandGit}></Tag>
        <Tag content="Stack" Icon={IconBrandSlack}></Tag>
        <Tag content="Sketch" Icon={IconBrandSketch}></Tag>
      </p>
    </div>
  </section>
);
