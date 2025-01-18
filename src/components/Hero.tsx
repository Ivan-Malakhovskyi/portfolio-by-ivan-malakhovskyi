"use client";

import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import Image from "next/image";
import copy from "/public/images/my_photo_copy_2.jpg";
import TypeWriterTextAnimation from "./global/TypeWriterTextAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/constants/animations/animationStyles";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations("Hero");

  const text = t("text_main");

  return (
    <MaxWidthWrapper>
      <section className="py-20">
        <TypeWriterTextAnimation
          text={t("text_add")}
          tag="h2"
          className="text-mainWhite mb-8"
        />
        <ul className="grid md:grid-cols-2 md:gap-6 items-center">
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
                {t("summary")}
                <span className="font-bold ">
                  Online store - marketplace
                </span>{" "}
                {t("summary_add")}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 "
              >
                <Link
                  href="mailto:ivanmalahovskij121@gmail.com"
                  className="text-mainBlack grid items-center text-center  bg-mainGreen  px-12 py-4  rounded-full hover:bg-addGreen focus:bg-addGreen transition ease-out duration-300 "
                >
                  {t("btn_hire")}
                </Link>

                <Link
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Ivan_Malakhovskyi_Full_Stack_Developer.pdf"
                  className="text-mainWhite grid items-center text-center  px-12 py-4 rounded-full bg-mainBlack border-[1px] border-solid border-mainWhite hover:bg-gray-400 focus:bg-gray-400 transition ease-out duration-300 "
                >
                  {t("btn_download")}
                </Link>
              </motion.div>
            </motion.div>
          </li>
          <li className="grid md:justify-end">
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
