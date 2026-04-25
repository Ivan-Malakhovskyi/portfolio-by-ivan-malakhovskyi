"use client";

import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import Image from "next/image";
import copy from "/public/images/hero_1_min.jpg";
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
      <section className="py-20 ">
        <TypeWriterTextAnimation
          text={t("text_add")}
          tag="h2"
          className="dark:text-text-inverse text-text-primary mb-8 max-w-none font-medium"
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
                className="text-4xl font-bold bg-gradient-to-r from-main-purple to-accent-purple bg-clip-text text-transparent break-words animate-text-gradient md:text-5xl lg:text-7xl  mb-8"
              />

              <motion.p
                className="text-text-muted font-medium text-xl md:text-2xl xl:text-[28px] mb-8"
                variants={itemVariants}
              >
                {t("summary")}
                <span className="font-bold text text-text-primary dark:text-text-inverse">
                  {t("main_title")}
                </span>{" "}
                {t("summary_add")}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 "
              >
                <Link
                  href="mailto:ivanmalahovskij121@gmail.com"
                  className="text-text-inverse px-12 py-4 dark:text-text-primary dark:bg-bg-primary bg-bg-light grid items-center text-center text-base font-medium rounded-full hover:bg-bg-primary-hover focus:bg-bg-primary-hover dark:hover:bg-bg-inverse-hover dark:focus:bg-bg-inverse-hover transition ease-out duration-300 "
                >
                  {t("btn_hire")}
                </Link>

                <Link
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Ivan_Malakhovskyi_Full_Stack_Developer.pdf"
                  className="text-text-primary dark:text-text-inverse  grid items-center text-center text-base px-12 py-4 font-medium rounded-full dark:bg-bg-dark border-[2px] border-solid border-border-primary dark:border-inverse hover:bg-bg-inverse-hover focus:bg-bg-inverse-hover  dark:hover:bg-bg-primary-hover dark:focus:bg-bg-primary-hover transition ease-out duration-300 "
                >
                  {t("btn_download")}
                </Link>
              </motion.div>
            </motion.div>
          </li>
          <li className="grid md:justify-end">
            {" "}
            <motion.div
              className="w-[250px] h-[250px] rounded-[50%] lg:w-[400px] lg:h-[400px] hidden md:block "
              variants={containerVariants}
              animate="visible"
              initial="hidden"
            >
              <motion.div variants={itemVariants}>
                {" "}
                <Image
                  src={copy}
                  width={300}
                  height={300}
                  alt="my_photo"
                  className="rounded-[100%] overflow-hidden w-full h-full"
                  priority
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
