"use client";

import { FC } from "react";
import people from "/public/icons/people_alt.svg";
import ImageComponent from "./global/ImageComponent";
import MaxWidthWrapper from "./global/MaxWidthWrapper";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container, item } from "@/constants/animations/animationStyles";
import { useTranslations } from "next-intl";

const About: FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const t = useTranslations("About");

  return (
    <MaxWidthWrapper>
      <section id="about" className="pb-14">
        <h2 className="text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
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
                <span className="ml-4">{t("summary")}</span>
              </div>
            </h3>
            <p className="text-mainGrey text-base md:text-xl lg:text-2xl">
              {t("text")}
            </p>
          </motion.li>
        </motion.ul>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
