"use client";

import React, { FC } from "react";
import { useTranslations } from "next-intl";

import { technologies } from "@/constants/technologies";
import { Project } from "@/types";

interface IBtnFilterProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const BtnFilter: FC<IBtnFilterProps> = ({ projects, setFilteredProjects }) => {
  const t = useTranslations("Projects");

  const handleFilter = (technology: string) => {
    if (technology === t("btn_filter")) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => {
        if (technology === "Backend") {
          return project.technologies?.includes("Node.js");
        }

        return project.technologies?.includes(technology);
      });

      setFilteredProjects(filtered);
    }
  };

  return (
    <ul className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 gap-2 grid-cols-2  justify-center items-center mb-10">
      <li className="grid">
        <button
          className="dark:bg-mainBlack text-mainBlack dark:text-mainWhite md:px-4 md:py-2 sm:text-base text-xs px-1 py-1 border-2 dark:focus:border-mainWhite focus:border-4 focus:border-mainWhite border-mainBlack border-solid rounded-full transform transition-transform duration-300 dark:border-mainWhite  hover:-translate-y-1 active:translate-y-0"
          onClick={() => handleFilter(t("btn_filter"))}
        >
          {t("btn_filter")}
        </button>
      </li>
      {technologies?.map(({ id, technologyName }) => (
        <li key={id} className="grid ">
          <button
            onClick={() => handleFilter(technologyName)}
            type="button"
            className="dark:bg-mainBlack text-mainBlack dark:text-mainWhite md:px-4 md:py-2 sm:text-base text-xs px-1 py-1 border-2 border-solid dark:border-mainWhite border-mainBlack rounded-full transform transition-transform duration-300 dark:focus:border-mainWhite focus:border-4 focus:border-mainWhite hover:-translate-y-1 active:translate-y-0"
          >
            {technologyName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BtnFilter;
