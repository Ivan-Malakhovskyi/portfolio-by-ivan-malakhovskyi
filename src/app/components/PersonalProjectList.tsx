import React from "react";
import PersonalProjectListItem from "./PersonalProjectListItem";
import { personalProjects } from "../constants";

const PersonalProjectList = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-6">
      {personalProjects.map((project) => (
        <PersonalProjectListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default PersonalProjectList;
