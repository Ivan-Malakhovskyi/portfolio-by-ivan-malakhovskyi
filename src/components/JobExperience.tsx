"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/constants/animations/animationStyles";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

type InfoFields =
  | "position"
  | "project"
  | "employment"
  | "company"
  | "duration";

interface IJobExperienceProps extends Record<InfoFields, string> {
  id: number;
}

const JobExperience: FC<IJobExperienceProps> = ({
  id,
  position,
  company,
  duration,
  employment,
  project,
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const t = useTranslations("WorkExperience");

  return (
    <>
      {" "}
      <motion.div
        className="even:bg-gradient-to-tr from-primary via-main-purple to-purple-600 to-accent-purple odd:bg-gradient-to-br shadow-lg rounded-card p-6 mb-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        ref={ref}
      >
        <motion.div animate={inView ? "visible" : "hidden"} variants={item}>
          {" "}
          <h2 className="text-2xl font-semibold text-text-inverse mb-2">
            {position}
          </h2>
          <h3 className="text-xl text-text-inverse mb-2">
            {t("company")} &#x2D; {company}
          </h3>
          <p className="text-text-inverse mb-2">
            {t("duration")} &#x2D; {duration}
          </p>
          {project && (
            <div className="text-text-inverse mb-2">
              <strong>{t("project")} &#x2D; </strong>
              {project}
            </div>
          )}
          <div className="text-text-inverse">
            <strong>{t("employment")} &#x2D; </strong>
            {employment}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default JobExperience;
