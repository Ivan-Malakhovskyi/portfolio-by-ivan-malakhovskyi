"use client";

import { FC } from "react";
import people from "/public/icons/people_alt.svg";
import ImageComponent from "./global/ImageComponent";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container, item } from "../constants/animationStyles";

const About: FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <MaxWidthWrapper>
      <section id="about" className="pb-14">
        <h2 className="text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
          About me
        </h2>
        <motion.ul
          className="flex justify-center gap-4"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {" "}
          <motion.li
            className="border border-addBlack p-10 rounded-lg bg-gray-900 shadow-2xl mb-10"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={item}
          >
            {" "}
            <h3 className="text-mainWhite font-semibold  text-3xl">
              {" "}
              <div className="mb-4 flex">
                <ImageComponent
                  src={people}
                  width={40}
                  height={40}
                  alt="people_icon"
                />
                <span className="ml-4">Summary</span>
              </div>
            </h3>
            <p className="text-mainGrey text-2xl">
              With a background in Biology and a drive for tech innovation, my
              journey led me to frontend development, where I currently enhance
              online shopping experiences at Team Challenge. I apply my Full
              Stack Developer skills, including proficiency with React, Next.js,
              Redux and Vite, to create adaptive and user-centric web solutions.
              As a Master`s candidate at Donetsk National University, I blend
              scientific analytical skills with technical prowess, underscoring
              my commitment to continuous learning. My goal is to contribute
              meaningfully to a collaborative team environment, leveraging my
              education and expertise to push boundaries in web development.
            </p>
          </motion.li>
        </motion.ul>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
