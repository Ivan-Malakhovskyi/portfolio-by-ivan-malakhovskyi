"use client";

import React, { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ImageComponent from "../global/ImageComponent";
import Link from "next/link";
import RolesList from "../RolesList";
import { ProjectsListItemProps } from "@/types";
import TechnoLogiesList from "../TechnoLogiesList";
import { item, transition } from "@/constants/animations/animationStyles";

const TeamProjectsListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, title, toDo, description, img, role, workedOn, href } = project;

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {}, [inView]);

  if (!role) {
    return undefined;
  }

  return (
    <div
      key={id}
      className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1712px] gap-6 bg-gray-900 shadow-lg rounded-lg p-8 w-full hover:scale-95 transition ease-out duration-300"
      ref={ref}
    >
      <motion.div
        className="mb-4 "
        variants={item}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={transition}
      >
        {" "}
        <h3 className="text-lg font-medium text-mainWhite mb-2 ">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-mainWhite mb-2">
          Role: <RolesList role={role} />
        </p>
        <div className="flex items-start">
          {" "}
          <p className="text-mainWhite mb-2">ToDO:</p>
          <ul className="flex flex-wrap gap-2">
            {toDo?.map((item, idx) => (
              <li key={idx}>
                <span className="text-xs md:text-xl ml-2 border-2 rounded-full text-mainWhite border-mainGrey px-1 md:px-2 md:py-[2px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-mainWhite ">
          <p className="mb-2">Worked On:</p>{" "}
          <TechnoLogiesList workedOn={workedOn} />
        </div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={transition}
      >
        {" "}
        <Link href={href} key={id} ref={ref} className="w-full">
          <ImageComponent
            className="w-full h-auto object-cover max-w-[700px]"
            src={img}
            width={700}
            height={700}
            alt="learn_lingo"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default TeamProjectsListItem;
