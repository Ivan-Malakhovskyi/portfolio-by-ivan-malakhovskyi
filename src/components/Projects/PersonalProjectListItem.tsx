"use client";

import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ImageComponent from "../global/ImageComponent";
import { ProjectsListItemProps } from "@/types";
import TechnoLogiesList from "../TechnoLogiesList";
import { item, transition } from "@/constants/animations/animationStyles";

const PersonalProjectListItem: FC<ProjectsListItemProps> = ({ project }) => {
  const { id, img, title, description, technologies, href } = project;

  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {}, [inView]);

  return (
    <div
      key={id}
      className="grid grid-cols-1 items-center md:grid-cols-2 gap-6 max-w-[1712px] bg-mainWhite dark:bg-gray-900 shadow-xl rounded-lg p-8 w-full hover:scale-95 transition ease-out duration-300"
      ref={ref}
    >
      <motion.div
        className="w-full mb-4"
        variants={item}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={transition}
      >
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

      <motion.div
        variants={item}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={transition}
      >
        {" "}
        <Link href={href} ref={ref} className="w-full">
          <ImageComponent
            className="w-full h-auto object-cover"
            src={img}
            width={700}
            height={700}
            alt={title}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default PersonalProjectListItem;
