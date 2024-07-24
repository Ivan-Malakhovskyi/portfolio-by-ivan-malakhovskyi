import React, { FC } from "react";
import { IProjectsListProps } from "../../types";

const ProjectsList: FC<IProjectsListProps> = ({
  projects,
  component: Component,
}) => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-6">
      {projects.map((project) => (
        <li key={project.id}>
          <Component project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
