import React from "react";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import JobExperience from "./JobExperience";

import { experiences } from "@/constants";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("WorkExperience");

  return (
    <MaxWidthWrapper>
      <section id="experience" className="pb-14">
        <h2 className="text-mainBlack dark:text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
          {t("title")}
        </h2>

        {experiences.map((exp, index) => (
          <JobExperience key={index} {...exp} />
        ))}
      </section>
    </MaxWidthWrapper>
  );
};

export default Experience;
