import { FC } from "react";
import ProjectList from "./ProjectList";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Projects: FC = () => {
  return (
    <div className="bg-gradient-to-t from-black via-gray-400 to-mainBlack">
      <MaxWidthWrapper>
        <section id="projects" className="py-40">
          <div className="">
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

          <ProjectList />
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
