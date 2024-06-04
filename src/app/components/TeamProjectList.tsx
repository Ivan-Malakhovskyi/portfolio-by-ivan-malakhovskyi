import { FC } from "react";
import TeamProjectsListItem from "./TeamProjectsListItem";
import { teamProjects } from "../constants";

const TeamProjectList: FC = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-6">
      {teamProjects.map((project) => (
        <TeamProjectsListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default TeamProjectList;
