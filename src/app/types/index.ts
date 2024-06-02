import { StaticImageData } from "next/image";

export interface WorkedOnListProps {
  workedOn: string[];
}

export interface RolesListProps {
  role: string[];
}

interface Project {
  id: number;
  href: string;
  title: string;
  description: string;
  img: StaticImageData;
  role?: string[];
  workedOn: string[];
  toDo?: string;
}
export interface ProjectsListItemProps {
  project: Project;
}
