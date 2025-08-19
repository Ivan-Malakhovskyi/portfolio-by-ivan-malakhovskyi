"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { ProjectsListItemProps } from "@/types";

import ImageComponent from "../global/ImageComponent";
import TechnoLogiesList from "../TechnoLogiesList";
import LinkIcons from "./LinkIcons";

const PersonalProjectListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, img, title, description, technologies, href, git } = project;
  return (
    <div
      key={id}
      className="relative group grid grid-cols-1 items-center md:grid-cols-2 gap-6 max-w-[1712px] bg-mainWhite dark:bg-gray-900 shadow-xl rounded-lg p-8 w-full "
    >
      <motion.div className="w-full mb-4 ">
        {" "}
        <h3 className="text-lg font-medium text-mainBlack dark:text-mainWhite mb-2 ">
          {title}
        </h3>
        <p className="text-accentGrey  dark:text-mainGrey mb-2">
          {description}
        </p>
        <div className="text-mainBlack dark:text-mainWhite ">
          <p className="mb-2">Features and Technologies</p>{" "}
          <TechnoLogiesList workedOn={technologies} />
        </div>
      </motion.div>

      <motion.div>
        {" "}
        <ImageComponent
          className="w-full h-auto object-cover"
          src={img}
          width={700}
          height={700}
          alt={title}
        />
      </motion.div>

      <LinkIcons href={href} codeLink={git} />
    </div>
  );
};

export default PersonalProjectListItem;
