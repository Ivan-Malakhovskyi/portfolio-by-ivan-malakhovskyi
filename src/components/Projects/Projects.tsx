"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import ProjectsList from "../global/ProjectsList";
import { personalProjects } from "@/constants/personalProjects";
import { teamProjects } from "@/constants/teamProjects";
import PersonalProjectListItem from "./PersonalProjectListItem";
import TeamProjectsListItem from "./TeamProjectsListItem";
import BtnFilter from "../BtnFilter";
import { Project } from "@/types";

const Projects: FC = () => {
  const [personalFilter, setPersonalFilter] = useState<Project[] | []>(
    personalProjects
  );
  const [teamFilter, setTeamFilter] = useState<Project[] | []>(teamProjects);

  const t = useTranslations("Projects");

  return (
    <div className="bg-gradient-to-b from-black via-gray-400 to-mainBlack">
      <MaxWidthWrapper>
        <section id="projects" className="py-40">
          <div>
            {" "}
            <p className="text-mainGrey text-2xl uppercase text-center mb-4">
              Frontend | Backend
            </p>
            <h2 className="text-mainWhite text-3xl font-semibold text-center md:text-6xl mb-4 capitalize">
              {t("title")}
            </h2>
            <p className="text-mainGrey text-2xl text-center mb-6 capitalize">
              {t("title_add")}
            </p>
          </div>

          <BtnFilter
            projects={teamProjects}
            setFilteredProjects={setTeamFilter}
          />

          <ProjectsList
            projects={teamFilter}
            component={TeamProjectsListItem}
          />

          <p className="text-mainBlack text-2xl uppercase text-center mt-10 mb-4 ">
            {t("text")}
          </p>

          <BtnFilter
            projects={personalProjects}
            setFilteredProjects={setPersonalFilter}
          />

          <ProjectsList
            projects={personalFilter}
            component={PersonalProjectListItem}
          />
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
