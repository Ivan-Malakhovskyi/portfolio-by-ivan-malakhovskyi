"use client";

import React, { FC } from "react";

import { ProjectsListItemProps } from "@/types";

import ImageComponent from "../global/ImageComponent";
import LinkIcons from "./LinkIcons";
import ListBadges from "../ListBadges";

const TeamProjectsListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, title, toDo, description, img, role, workedOn, href, git } =
    project;

  return (
    <div
      key={id}
      className="relative group max-w-[1712px] w-full overflow-hidden p-4 md:p-5 rounded-card"
    >
      <ImageComponent
        className="w-full mb-1 h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
        src={img}
        width={700}
        height={700}
        alt={title}
      />{" "}
      <div className="py-2 md:py-4">
        {" "}
        <h3 className="text-xl lg:text-2xl font-bold text-text-primary dark:text-text-inverse">
          {title}
        </h3>
        <p className="text-text-muted font-bold text-sm xl:text-base">
          {description}
        </p>
      </div>
      <ListBadges list={role!} title="Role" />
      <ListBadges list={toDo!} title="Todo" />
      <LinkIcons href={href} codeLink={git} />
    </div>
  );
};

export default TeamProjectsListItem;
