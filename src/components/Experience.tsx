import React from "react";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import JobExperience from "./JobExperience";

import { experiences } from "@/constants";

const Experience = () => {
  return (
    <MaxWidthWrapper>
      <section id="experience" className="pb-14">
        <h2 className=" text-3xl font-semibold  text-center md:text-6xl mb-8">
          Work Experience
        </h2>

        {experiences.map((exp, index) => (
          <JobExperience key={index} {...exp} />
        ))}
      </section>
    </MaxWidthWrapper>
  );
};

export default Experience;
