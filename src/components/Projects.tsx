import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProjectsList from "./global/ProjectsList";
import { personalProjects } from "../constants/personalProjects";
import { teamProjects } from "../constants/teamProjects";
import PersonalProjectListItem from "./PersonalProjectListItem";
import TeamProjectsListItem from "./TeamProjectsListItem";

const Projects: FC = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-400 to-mainBlack">
      <MaxWidthWrapper>
        <section id="projects" className="py-40">
          <div>
            {" "}
            <p className="text-mainGrey text-2xl uppercase text-center mb-4">
              Frontend | Backend
            </p>
            <h2 className="text-mainWhite text-3xl font-semibold text-center md:text-6xl mb-4">
              Featured Projects
            </h2>
            <p className="text-mainGrey text-2xl text-center mb-6">
              TEAM PROJECTS
            </p>
          </div>

          <ProjectsList
            projects={teamProjects}
            component={TeamProjectsListItem}
          />

          <p className="text-mainBlack text-2xl uppercase text-center mt-10 mb-4">
            PERSONAL PROJECTS
          </p>

          <ProjectsList
            projects={personalProjects}
            component={PersonalProjectListItem}
          />
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
