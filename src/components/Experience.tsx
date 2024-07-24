import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import JobExperience from "./JobExperience";

import { experiences } from "../constants";

const Experience = () => {
  return (
    <MaxWidthWrapper>
      <section id="experience" className="pb-14">
        <h2 className="text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
          Experience
        </h2>

        {experiences.map((exp, index) => (
          <JobExperience key={index} {...exp} />
        ))}
      </section>
    </MaxWidthWrapper>
  );
};

export default Experience;
