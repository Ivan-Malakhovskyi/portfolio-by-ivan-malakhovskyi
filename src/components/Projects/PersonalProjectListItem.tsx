"use client";

import { FC } from "react";

import { ProjectsListItemProps } from "@/types";

import ImageComponent from "../global/ImageComponent";
import LinkIcons from "./LinkIcons";

const PersonalProjectListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, img, title, description, technologies, href, git } = project;
  return (
    <div
      key={id}
      className="relative max-w-[1712px] rounded-2xl w-full  overflow-hidden"
    >
      <ImageComponent
        className="w-full  mb-1 h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
        src={img}
        width={700}
        height={700}
        alt={title}
      />{" "}
      <LinkIcons href={href} codeLink={git} />
      <div className="py-4">
        {" "}
        <h3 className="text-xl lg:text-2xl font-bold text-mainBlack dark:text-mainWhite">
          {title}
        </h3>
        <p className="text-accentGrey dar:text-bgGrey font-bold text-sm xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PersonalProjectListItem;
