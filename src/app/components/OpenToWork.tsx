"use client";

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const OpenToWork: FC = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-14">
        <div className="overflow-hidden w-full">
          {" "}
          <div className="animate-marquee gradient-text">
            {" "}
            <h3 className="text-mainGrey text-xl font-semibold mb-8s">
              I`m currently looking for Jobs.
            </h3>
          </div>
        </div>
        <ul className="flex gap-4 flex-col items-center mb-8">
          {" "}
          <li>
            <span className="text-mainWhite font-semibold  text-3xl md:text-6xl">
              {" "}
              Jobs: &#123;
            </span>
          </li>{" "}
          <li>
            <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-neon to-skyBlue text-transparent bg-clip-text break-word">
              Full Stack Developer
            </h2>
          </li>
          <li>
            <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-aqua to-purple text-transparent bg-clip-text break-word">
              Frontend Developer
            </h2>
          </li>
          <li>
            <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-mainWhite to-gray-600 text-transparent bg-clip-text break-word">
              Backend Developer
            </h2>
          </li>
          <li>
            {" "}
            <span className="text-mainWhite text-3xl md:text-6xl">&#125;</span>
          </li>
        </ul>
        <h3 className="text-mainGrey text-xl  font-semibold  max-w-[600px] ">
          I am particularly interested in product based positions where I can
          help make an organization wide impact.
        </h3>
      </section>
    </MaxWidthWrapper>
  );
};

export default OpenToWork;
