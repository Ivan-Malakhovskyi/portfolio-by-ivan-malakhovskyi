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
    <section
      id="skills"
      className="py-20 dark:bg-mainBlack dark:shadow-custom dark:backdrop-blur-sm"
    >
      <MaxWidthWrapper>
        <h2
          id="hard_skills"
          className="text-mainBlack dark:text-mainWhite text-3xl md:text-6xl font-bold text-center mb-8"
        >
          {t("title")}
        </h2>
        <p className="text-bgGrey font-medium text-2xl text-center mb-6 capitalize">
          {t("hard")}
        </p>
        <motion.ul
          className="flex items-stretch justify-start flex-wrap gap-6 h-auto mb-6"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {hardSkills.map(({ name, icon }, index) => (
            <li
              key={index}
              className="border bg-mainWhite dark:bg-transparent dark:border-bgGrey rounded-2xl grayscale dark:opacity-60 hover:grayscale-0 hover:opacity-100 transition px-4 py-3 hover:scale-105 ease-out duration-300 cursor-pointer  shadow-lg"
            >
              <motion.div className="text-mainBlack flex justify-between items-center gap-4 transition-transform duration-200 will-change-transform">
                <ImageComponent src={icon} alt={name} width={30} height={30} />
                <h3 className="text-sm text-mainBlack dark:text-mainWhite font-semibold">
                  {name}
                </h3>
              </motion.div>
            </li>
          ))}
        </motion.ul>

        <p className="text-bgGrey font-medium text-2xl text-center mb-6 capitalize">
          {t("soft")}
        </p>
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
              className="rounded-lg p-6 hover:scale-105 transition ease-out duration-300 cursor-pointer"
            >
              <motion.div
                className="flex  justify-center items-center flex-col"
                initial="hidden"
                animate={softInView ? "visible" : "hidden"}
                variants={item}
              >
                {" "}
                <Icon className="size-16 text-mainBlack dark:text-mainWhite hover:fill-slate-500" />
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
