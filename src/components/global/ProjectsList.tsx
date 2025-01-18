import React, { FC } from "react";
import { IProjectsListProps } from "@/types";

const ProjectsList: FC<IProjectsListProps> = ({
  projects,
  component: Component,
}) => {
  return (
    <ul className="grid items-center justify-center gap-6">
      {projects.map((project) => (
        <li key={project.id} className="grid grid-cols-1 gap-3 ">
          <Component project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
