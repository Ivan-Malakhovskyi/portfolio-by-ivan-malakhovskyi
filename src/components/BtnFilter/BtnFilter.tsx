"use client";

import React, { FC, useState } from "react";

import { technologies } from "@/constants/technologies";
import { Project } from "@/types";

interface IBtnFilterProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const BtnFilter: FC<IBtnFilterProps> = ({ projects, setFilteredProjects }) => {
  const [active, setActive] = useState<string | null>(null);

  const handleFilter = (technology: string) => {
    setActive(technology);

    if (technology === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project?.technologies?.includes(technology)
      );

      setFilteredProjects(filtered);
    }
  };

  return (
    <ul className="flex gap-2 flex-wrap justify-center items-center mb-10">
      <button
        className={`${
          active === "All" ? "ring-4 ring-yellow-400" : ""
        } bg-mainBlack px-4 py-2 border-2 border-solid rounded-full transform transition-transform duration-300 hover:-translate-y-1 active:translate-y-0`}
        onClick={() => handleFilter("All")}
      >
        All
      </button>
      {technologies &&
        technologies.map(({ id, technologyName }) => (
          <li key={id}>
            <button
              onClick={() => handleFilter(technologyName)}
              type="button"
              className={`${
                active === technologyName ? "ring-4 ring-yellow-400" : ""
              } bg-mainBlack px-4 py-2 border-2 border-solid rounded-full transform transition-transform duration-300 hover:-translate-y-1 active:translate-y-0`}
            >
              {technologyName}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default BtnFilter;
