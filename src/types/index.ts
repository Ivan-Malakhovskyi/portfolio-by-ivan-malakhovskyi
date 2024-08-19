import { StaticImageData } from "next/image";

export interface TechnoLogiesListProps {
  workedOn: string[] | null;
}

export interface RolesListProps {
  role: string[];
}

export interface Project {
  id: number;
  href: string;
  title: string;
  description: string;
  img: StaticImageData;
  role: string[] | null;
  technologies: string[] | null;
  workedOn: string[] | null;
  toDo: string | null;
}
export interface ProjectsListItemProps {
  project: Project;
}

type ComponentType = React.ComponentType<{ project: Project }>;

export interface IProjectsListProps {
  projects: Project[];
  component: ComponentType;
}
