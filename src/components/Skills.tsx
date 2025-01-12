"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageComponent from "./global/ImageComponent";
import MaxWidthWrapper from "./global/MaxWidthWrapper";

import { hardSkills, softSkills } from "@/constants";

import { container, item } from "@/constants/animations/animationStyles";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const { ref: softRef, inView: softInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <MaxWidthWrapper>
        <h2
          id="hard_skills"
          className="text-mainWhite text-3xl md:text-6xl font-bold text-center mb-8"
        >
          Hard Skills
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
              className="w-full bg-mainBlack shadow-md rounded-lg p-6 hover:animate-pulse transition ease-out duration-300 cursor-pointer"
            >
              <motion.div
                className="flex  justify-center items-center flex-col"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={item}
              >
                {" "}
                <ImageComponent src={icon} alt={name} width={60} height={60} />
                <h3 className="text-xl text-mainWhite font-semibold mt-4">
                  {name}
                </h3>
              </motion.div>
            </li>
          ))}
        </motion.ul>
        <h2
          id="soft_skills"
          className="text-mainWhite text-3xl md:text-6xl font-bold text-center my-8"
        >
          Soft Skills
        </h2>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-6"
          variants={container}
          initial="hidden"
          animate={softInView ? "visible" : "hidden"}
          ref={softRef}
        >
          {softSkills.map(({ name, icon }, index) => (
            <li
              key={index}
              className=" bg-mainBlack shadow-md rounded-lg p-6 hover:animate-pulse transition ease-out duration-300 cursor-pointer"
            >
              <motion.div
                className="flex  justify-center items-center flex-col"
                initial="hidden"
                animate={softInView ? "visible" : "hidden"}
                variants={item}
              >
                {" "}
                <ImageComponent src={icon} alt={name} width={60} height={60} />
                <h3 className="text-xl text-mainWhite font-semibold mt-4">
                  {name}
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
