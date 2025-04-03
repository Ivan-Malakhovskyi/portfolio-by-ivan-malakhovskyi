"use client";

import React, { FC, useState } from "react";

import { technologies } from "@/constants/technologies";
import { Project } from "@/types";
import { useTranslations } from "next-intl";

interface IBtnFilterProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const BtnFilter: FC<IBtnFilterProps> = ({ projects, setFilteredProjects }) => {
  const [active, setActive] = useState<string | null>(null);

  const t = useTranslations("Projects");

  const handleFilter = (technology: string) => {
    setActive(technology);

    if (technology === t("btn_filter")) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.technologies?.includes(technology)
      );

      setFilteredProjects(filtered);
    }
  };

  return (
    <ul className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 gap-2 grid-cols-1  justify-center items-center mb-10">
      <li className="grid">
        {" "}
        <button
          className={`${
            active === t("btn_filter") ? "ring-4 ring-yellow-400" : ""
          } dark:bg-mainBlack text-mainBlack dark:text-mainWhite px-4 py-2 border-2 border-mainBlack border-solid rounded-full transform transition-transform duration-300 dark:border-mainWhite dark:focus:border-mainBlack focus:border-mainBlack hover:-translate-y-1 active:translate-y-0`}
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
            className={`${
              active === technologyName ? "ring-4 ring-yellow-400" : ""
            } dark:bg-mainBlack text-mainBlack dark:text-mainWhite px-4 py-2 border-2 border-solid dark:border-mainWhite border-mainBlack rounded-full transform transition-transform duration-300 dark:focus:border-mainWhite focus:border-mainBlack hover:-translate-y-1 active:translate-y-0`}
          >
            {technologyName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BtnFilter;
