"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageComponent from "./global/ImageComponent";

import { skills } from "../constants";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {}, [inView]);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-8">
          Skills
        </h2>
        <motion.ul
          className="flex justify-center items-center flex-wrap gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {skills.map(({ name, icon }, index) => (
            <li
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5  bg-mainBlack shadow-md rounded-lg p-6 hover:scale-95 transition ease-out duration-300 cursor-pointer"
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
      </div>
    </section>
  );
};

export default Skills;
