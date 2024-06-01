"use client";

import React, { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ImageComponent from "./global/ImageComponent";
import Link from "next/link";
import WorkedOnList from "./WorkedOnList";
import RolesList from "./RolesList";
import { StaticImageData } from "next/image";
import { ProjectsListItemProps } from "../types";

// {
//   id: 2,
//   href: "https://learn-lingo-pet-project.vercel.app/",
//   title: "LearnLingo",
//   description:
//     "This application is designed for a company that offers online language learning services. The app consists of three main pages: 'Home', 'Teachers' and 'Favorites' ",
//   img: learnLingo,
//   role: "Frontend developer",
//   workedOn: [
//     "React + Vite + TS",
//     "React-dom",
//     "Redux",
//     "Firebase (signUp, signIn, signOut, Fetch data)",
//     "Filtering teachers by languages, level, price, ",
//     "Add teachers to favorites",
//   ],
//   toDo: "",
//   type: "Personal project",
// },

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 1 };

const ProjectsListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, title, toDo, description, img, role, workedOn, href } = project;

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    console.log(`Element is ${inView ? "in view" : "out of view"}`);
  }, [inView]);

  return (
    <>
      {" "}
      <Link href={href} key={id} ref={ref}>
        <li
          className="flex items-center flex-wrap justify-between gap-6 bg-gray-900 shadow-lg rounded-lg p-8 w-full hover:scale-95 transition ease-out duration-300"
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
              width={400}
              height={400}
              alt="learn_lingo"
            />
          </motion.div>
        </li>
      </Link>
    </>
  );
};

export default ProjectsListItem;
