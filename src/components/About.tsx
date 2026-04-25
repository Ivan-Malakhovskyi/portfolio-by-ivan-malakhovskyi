"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { IdentificationIcon } from "@heroicons/react/24/outline";

import { container, item } from "@/constants/animations/animationStyles";
import MaxWidthWrapper from "./global/MaxWidthWrapper";

const About: FC = () => {
  const t = useTranslations("About");
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <MaxWidthWrapper>
      <section id="about" className="pb-14">
        <h2 className="text-text-primary dark:text-text-inverse text-3xl font-semibold  text-center md:text-6xl mb-8">
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
            className="dark:border dark:border-border-muted rounded-card p-10 dark:bg-transparent shadow-2xl mb-10"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={item}
          >
            {" "}
            <h3 className="text-text-primary dark:text-text-inverse font-semibold  text-3xl">
              {" "}
              <div className="mb-4 flex items-center">
                <IdentificationIcon className="size-10 text-text-primary dark:text-text-inverse" />
                <span className="ml-4 text-base font-medium md:text-lg lg:text-2xl">
                  {t("summary")}
                </span>
              </div>
            </h3>
            <p className="text-text-muted font-medium text-base md:text-xl lg:text-2xl">
              {t("text")}
            </p>
          </motion.li>
        </motion.ul>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
