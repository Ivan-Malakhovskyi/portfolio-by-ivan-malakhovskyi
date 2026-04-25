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
      className="py-20 bg-radial-section-gradient-light dark:bg-radial-section-gradient-dark dark:bg-text-primary  dark:shadow-custom dark:backdrop-blur-sm"
    >
      <MaxWidthWrapper>
        <h2
          id="hard_skills"
          className="text-text-primary dark:text-text-inverse text-3xl md:text-6xl font-bold text-center mb-8"
        >
          {t("title")}
        </h2>
        <p className="text-text-muted font-medium text-2xl text-center mb-6 capitalize">
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
              className="border bg-text-inverse dark:bg-transparent dark:border-border-muted rounded-2xl grayscale dark:opacity-60 hover:grayscale-0 dark:hover:opacity-100 transition px-4 py-3 hover:scale-105 ease-out duration-300 cursor-pointer  shadow-lg"
            >
              <motion.div className="text-text-primary flex justify-between items-center gap-4 transition-transform duration-200 will-change-transform">
                <ImageComponent src={icon} alt={name} width={30} height={30} />
                <h3 className="text-sm text-text-primary dark:text-text-inverse font-semibold">
                  {name}
                </h3>
              </motion.div>
            </li>
          ))}
        </motion.ul>

        <p className="text-text-muted font-medium text-2xl text-center mb-6 capitalize">
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
                <Icon className="size-16 text-text-primary dark:text-text-inverse hover:fill-text-muted" />
                <h3 className="text-xl text-text-primary dark:text-text-inverse text-center font-semibold mt-4">
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
