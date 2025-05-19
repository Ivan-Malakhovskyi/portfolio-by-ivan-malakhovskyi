"use client";

import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";

import { ProjectsListItemProps } from "@/types";

import ImageComponent from "../global/ImageComponent";
import RolesList from "../RolesList";
import TechnoLogiesList from "../TechnoLogiesList";
import LinkIcons from "./LinkIcons";

const TeamProjectsListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, title, toDo, description, img, role, workedOn, href, git } =
    project;

  return (
    <div
      key={id}
      className="relative group grid grid-cols-1 md:grid-cols-2 items-center max-w-[1712px] gap-6 dark:bg-gray-900  bg-mainWhite shadow-xl rounded-lg p-8 w-full hover:bg-gray-300  focus:bg-zinc-300 hover:dark:bg-gray-500 focus:dark:bg-gray-500 transition ease-out duration-300"
    >
      <motion.div className="mb-4 ">
        {" "}
        <h3 className="text-lg font-medium text-mainBlack dark:text-mainWhite mb-2 ">
          {title}
        </h3>
        <p className="text-accentGrey dark:text-mainGrey mb-2">{description}</p>
        <p className="text-mainBlack dark:text-mainWhite mb-2">
          Role: <RolesList role={role!} />
        </p>
        <div className="flex items-start">
          {" "}
          <p className="text-mainBlack dark:text-mainWhite mb-2">ToDO:</p>
          <ul className="flex flex-wrap gap-2">
            {toDo?.map((item, idx) => (
              <li key={idx}>
                <span className="text-xs md:text-xl ml-2 border-2 rounded-full text-mainBlack dark:text-mainWhite border-mainGrey px-1 md:px-2 md:py-[2px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-mainBlack dark:text-mainWhite ">
          <p className="mb-2">Worked On:</p>{" "}
          <TechnoLogiesList workedOn={workedOn} />
        </div>
      </motion.div>

      <motion.div>
        {" "}
        <Link href={href} key={id} className="w-full">
          <ImageComponent
            className="w-auto h-auto object-cover"
            src={img}
            width={700}
            height={700}
            alt={title}
          />
        </Link>
      </motion.div>

      <LinkIcons href={href} codeLink={git} />
    </div>
  );
};

export default TeamProjectsListItem;
