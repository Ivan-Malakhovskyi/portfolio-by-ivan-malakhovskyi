"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import ImageComponent from "./global/ImageComponent";
import MaxWidthWrapper from "./global/MaxWidthWrapper";

import { hardSkills, softSkills } from "@/constants";

import { container, item } from "@/constants/animations/animationStyles";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const { ref: softRef, inView: softInView } = useInView({ threshold: 0.1 });

  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <MaxWidthWrapper>
        <h2
          id="hard_skills"
          className="text-mainBlack dark:text-mainWhite text-3xl md:text-6xl font-bold text-center mb-8"
        >
          {t("title")}
        </h2>
        <motion.ul
          className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-6"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {hardSkills.map(({ name, icon }, index) => (
            <li
              key={index}
              className="w-full bg-white dark:bg-mainBlack shadow-xl rounded-lg p-6 hover:scale-105 focus:scale-110 transition ease-out duration-300 cursor-pointer"
            >
              <motion.div
                className="flex  justify-center items-center flex-col"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={item}
              >
                {" "}
                <ImageComponent src={icon} alt={name} width={60} height={60} />
                <h3 className="text-xl text-mainBlack dark:text-mainWhite font-semibold mt-4">
                  {name}
                </h3>
              </motion.div>
            </li>
          ))}
        </motion.ul>
        <h2
          id="soft_skills"
          className="text:mainBlack dark:text-mainWhite text-3xl md:text-6xl font-bold text-center my-8"
        >
          {t("title_2")}
        </h2>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-6"
          variants={container}
          initial="hidden"
          animate={softInView ? "visible" : "hidden"}
          ref={softRef}
        >
          {softSkills.map(({ name, Icon }, index) => (
            <li
              key={index}
              className="bg-mainWhite dark:bg-mainBlack shadow-xl rounded-lg p-6 hover:scale-105 focus:scale-110 transition ease-out duration-300 cursor-pointer"
            >
              <motion.div
                className="flex  justify-center items-center flex-col"
                initial="hidden"
                animate={softInView ? "visible" : "hidden"}
                variants={item}
              >
                {" "}
                <Icon className="size-16 text-mainBlack dark:text-mainWhite" />
                <h3 className="text-xl text-mainBlack dark:text-mainWhite text-center font-semibold mt-4">
                  {t(name)}
                </h3>
              </motion.div>
            </li>
          ))}
        </motion.ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Skills;
