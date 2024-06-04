import { FC } from "react";
import TeamProjectList from "./TeamProjectList";
import MaxWidthWrapper from "./MaxWidthWrapper";
import PersonalProjectList from "./PersonalProjectList";

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

          <TeamProjectList />

          <p className="text-mainBlack text-2xl uppercase text-center mt-10 mb-4">
            PERSONAL PROJECTS
          </p>

          <PersonalProjectList />
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
