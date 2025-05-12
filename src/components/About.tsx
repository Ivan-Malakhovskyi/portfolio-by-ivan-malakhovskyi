"use client";

import { FC } from "react";
import people from "/public/icons/people_alt.svg";
import ImageComponent from "./global/ImageComponent";
import MaxWidthWrapper from "./global/MaxWidthWrapper";

import { motion } from "framer-motion";
import { container, item } from "@/constants/animations/animationStyles";
import { useTranslations } from "next-intl";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";

const About: FC = () => {
  const t = useTranslations("About");
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <MaxWidthWrapper>
      <section id="about" className="pb-14">
        <h2 className="text-mainBlack dark:text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
          {t("title")}
        </h2>
        <motion.ul
          className="flex justify-center gap-4"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.li
            className="dark:border dark:border-addBlack p-10 rounded-lg dark:bg-gray-900 shadow-2xl mb-10"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={item}
          >
            {" "}
            <h3 className="text-mainBlack dark:text-mainWhite font-semibold  text-3xl">
              {" "}
              <div className="mb-4 flex">
                <IdentificationIcon className="size-10 text-mainBlack dark:text-mainWhite" />
                <span className="ml-4">{t("summary")}</span>
              </div>
            </h3>
            <p className="text-accentGrey dark:text-mainGrey   text-base md:text-xl lg:text-2xl">
              {t("text")}
            </p>
          </motion.li>
        </motion.ul>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
