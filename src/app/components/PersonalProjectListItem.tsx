"use client";

import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ImageComponent from "./global/ImageComponent";
import { animationVariants, transition } from "../constants";
import { ProjectsListItemProps } from "../types";
import WorkedOnList from "./WorkedOnList";

const PersonalProjectListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, img, title, description, workedOn, href } = project;

  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    console.log(`Element is ${inView ? "in view" : "out of view"}`);
  }, [inView]);

  return (
    <>
      <Link href={href} key={id} ref={ref}>
        <li
          className="flex items-center flex-wrap justify-between gap-6 max-w-[1712px] bg-gray-900 shadow-lg rounded-lg p-8 w-full hover:scale-95 transition ease-out duration-300"
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
            <div className="text-mainWhite ">
              <p className="mb-2">Features and Technologies</p>{" "}
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

export default PersonalProjectListItem;
