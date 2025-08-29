"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";

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
    <div className="bg-gradient-to-b dark:from-black dark:via-gray-400 dark:to-mainBlack  from-gray-200 via-gray-300 to-gray-500">
      <MaxWidthWrapper>
        <section id="projects" className="py-40">
          <div>
            {" "}
            <p className="text-mainBlack dark:text-mainGrey text-2xl uppercase text-center mb-4">
              Frontend | Backend
            </p>
            <h2 className="text-mainBlack dark:text-mainWhite text-3xl font-semibold text-center md:text-6xl mb-4 capitalize">
              {t("title")}
            </h2>
            <p className="text-mainBlack dark:text-mainGrey text-2xl text-center mb-6 capitalize">
              {t("title_add")}
            </p>
          </div>

          <BtnFilter
            projects={teamProjects}
            setFilteredProjects={setTeamFilter}
          />

          {teamFilter.length > 0 ? (
            <AnimatePresence mode="wait">
              <ProjectsList
                projects={teamFilter}
                component={TeamProjectsListItem}
              />
            </AnimatePresence>
          ) : (
            <p className="text-center font-medium text-mainBlack dark:text-mainWhite">
              In progress
            </p>
          )}

          <p className="dark:text-mainGrey text-mainBlack text-2xl capitalize text-center mt-10 mb-6   ">
            {t("text")}
          </p>

          <BtnFilter
            projects={personalProjects}
            setFilteredProjects={setPersonalFilter}
          />

          {personalFilter.length > 0 ? (
            <AnimatePresence mode="wait">
              <ProjectsList
                projects={personalFilter}
                component={PersonalProjectListItem}
              />
            </AnimatePresence>
          ) : (
            <p className="text-center font-medium text-mainBlack dark:text-mainGrey">
              In progress
            </p>
          )}
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
