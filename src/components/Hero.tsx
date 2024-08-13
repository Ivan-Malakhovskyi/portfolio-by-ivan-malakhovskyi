"use client";

import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import copy from "/public/images/my_photo_copy_2.jpg";
import TypeWriterTextAnimation from "./global/TypeWriterTextAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/constants/animations/animationStyles";

const text =
  "Ivan Malakhovskyi Enthusiastic Full Stack Developer from Ukraine, Vinnytsia";

const Hero: FC = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-20">
        <TypeWriterTextAnimation
          text="Hey there  &#x1F44B;, my name is"
          tag="h2"
          className="text-mainWhite mb-8"
        />

        <ul className="md:flex md:gap-6 flex-wrap justify-between">
          <li>
            {" "}
            <motion.div
              className="max-w-4xl"
              variants={containerVariants}
              animate="visible"
              initial="hidden"
            >
              <TypeWriterTextAnimation
                text={text}
                tag="h1"
                className="text-mainWhite text-4xl font-bold bg-gradient-to-r from-mainPurple to-addPurple bg-clip-text text-transparent break-words animate-text-gradient md:text-5xl lg:text-7xl  mb-8"
              />

              <motion.p className="text-mainWhite mb-8" variants={itemVariants}>
                I am a Full Stack Developer. Recently I am a successfully
                completed commercial project{" "}
                <span className="font-bold ">Online store - marketplace</span>{" "}
                at company Team Challenge. Now I am ready to new opportunities
              </motion.p>
              <motion.span variants={itemVariants}>
                <Link
                  href="mailto:ivanmalahovskij121@gmail.com"
                  className="text-mainBlack bg-mainGreen px-12 py-4 mb-4 md:mb-0 rounded-full hover:bg-addGreen focus:bg-addGreen transition ease-out duration-300 mr-10"
                >
                  Hire me
                </Link>

                <Link
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Ivan_Malakhovskyi_Full_Stack_Developer.pdf"
                  className="text-mainWhite px-12 py-4 rounded-full bg-mainBlack border-[1px] border-solid border-mainWhite hover:bg-gray-400 focus:bg-gray-400 transition ease-out duration-300 "
                >
                  Download CV
                </Link>
              </motion.span>
            </motion.div>
          </li>
          <li>
            {" "}
            <motion.div
              className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] hidden md:block "
              variants={containerVariants}
              animate="visible"
              initial="hidden"
            >
              <motion.div variants={itemVariants}>
                {" "}
                <Image
                  src={copy}
                  width={395}
                  height={300}
                  alt="my_photo"
                  className="rounded-full"
                />
              </motion.div>
            </motion.div>
          </li>
        </ul>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
