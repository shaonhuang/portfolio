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
    ref={(cur:HTMLElement) => {
      if (cur) {
        scrollRef.current[2] = cur;
      }
    }}
  >
    <p className="handwriting">Skills</p>
    <p>
      Language
      <Tag content="Typescript" Icon={IconBrandTypescript}></Tag>
      <Tag content="Javascript" Icon={IconBrandJavascript}></Tag>
      <Tag content="Python" Icon={IconBrandPython}></Tag>
    </p>
    <p>
      Frontend
      <Tag content="React" Icon={IconBrandReact}></Tag>
      <Tag content="Vue" Icon={IconBrandVue}></Tag>
      <Tag content="HTML" Icon={IconBrandHtml5}></Tag>
      <Tag content="CSS" Icon={IconBrandCss3}></Tag>
    </p>
    <p>
      Backend
      <Tag content="Django" Icon={IconBrandDjango}></Tag>
    </p>
    <p>
      Design
      <Tag content="Photoshop"></Tag>
      <Tag content="illustrator"></Tag>
      <Tag content="Sketch"></Tag>
    </p>
    <p>
      Tools
      <Tag content="Git" Icon={IconBrandGit}></Tag>
      <Tag content="Stack" Icon={IconBrandSlack}></Tag>
      <Tag content="Sketch" Icon={IconBrandSketch}></Tag>
    </p>
  </section>
);
