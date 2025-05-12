"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/constants/animations/animationStyles";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

interface IJobExperienceProps {
  position: string;
  company: string;
  period: string;
  project: string;
  employment: string;
}

const JobExperience: FC<IJobExperienceProps> = ({
  position,
  company,
  period,
  project,
  employment,
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const t = useTranslations("WorkExperience");

  return (
    <>
      {" "}
      <motion.div
        className="even:bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 to-indigo-900 odd:bg-gradient-to-br  shadow-lg rounded-lg p-6 mb-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        ref={ref}
      >
        <motion.div animate={inView ? "visible" : "hidden"} variants={item}>
          {" "}
          <h2 className="text-2xl font-semibold text-white mb-2">{position}</h2>
          <h3 className="text-xl text-gray-300 mb-2">{company}</h3>
          <p className="text-gray-400 mb-2">{period}</p>
          <div className="text-gray-200">
            <strong>Project: </strong>
            {project}
          </div>
          <div className="text-gray-200">
            <strong>Employment: </strong>
            {t("employment")}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default JobExperience;
