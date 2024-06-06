"use client";

import React, { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ImageComponent from "./global/ImageComponent";
import Link from "next/link";
import WorkedOnList from "./WorkedOnList";
import RolesList from "./RolesList";
import { ProjectsListItemProps } from "../types";
import { animationVariants, transition } from "../constants";

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
    <>
      {" "}
      <Link href={href} key={id} ref={ref} className="w-full">
        <li
          className="flex items-center flex-wrap justify-between max-w-[1712px] gap-6 bg-gray-900 shadow-lg rounded-lg p-8 w-full hover:scale-95 transition ease-out duration-300"
          ref={ref}
        >
          <motion.div
            className="md:w-1/2 mb-4 "
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={transition}
          >
            {" "}
            <h3 className="text-lg font-medium text-mainWhite mb-2 ">
              {title}
            </h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-mainWhite mb-2">
              Role: <RolesList role={role} />
            </p>
            <p className="text-mainWhite mb-2">
              ToDO:{" "}
              <span className="ml-2 border-2 rounded-full border-mainGrey px-2 py-[2px]">
                {toDo}
              </span>
            </p>
            <div className="text-mainWhite ">
              <p className="mb-2">Worked On:</p>{" "}
              <WorkedOnList workedOn={workedOn} />
            </div>
          </motion.div>

          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={transition}
          >
            {" "}
            <ImageComponent
              className="rounded-lg w-1/2 md:w-full md:h-full"
              src={img}
              width={700}
              height={700}
              alt="learn_lingo"
            />
          </motion.div>
        </li>
      </Link>
    </>
  );
};

export default TeamProjectsListItem;
