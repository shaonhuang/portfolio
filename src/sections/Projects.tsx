import ProjectBlock from '../components/ProjectBlock';
import SectionTitle from '../components/SectionTitle';
import { personal, work } from '../markdown/projects';
interface ProjectsProps {
  id: number;
  title: string;
  date: string;
  md: string;
  tag: Array<string>;
}
//TODO: fix any
const MapProject = (projects: Array<ProjectsProps>) => {
  return projects.map((data: any) => (
    <div key={data.id}>
      <ProjectBlock data={data} />
      {data.id !== projects.length ? <hr /> : <></>}
    </div>
  ));
};
export const Projects = ({
  scrollRef,
}: {
  scrollRef: {
    current: Array<HTMLElement>;
  };
}) => {
  return (
    <section
      ref={(cur: HTMLElement) => (scrollRef.current[3] = cur)}
      className="prose"
    >
      <SectionTitle title="Projects" />
      <p className="text-2xl text-left">
        <strong>Work Experience & Projects</strong>
      </p>
      <div>
        {MapProject(work)}
        <br />
        <br />
        Personal Experience & Projects
        {MapProject(personal)}
      </div>
    </section>
  );
};
