"use client";

import { FC } from "react";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import { useTranslations } from "next-intl";

const OpenToWork: FC = () => {
  const t = useTranslations("OpenToWork");

  return (
    <>
      <div className="overflow-hidden w-full">
        {" "}
        <div className="animate-marquee gradient-text">
          {" "}
          <h3 className="text-mainGrey text-2xl font-semibold mb-8">
            {t("text")}
          </h3>
        </div>
      </div>
      <MaxWidthWrapper>
        <section className="py-14">
          <ul className="flex gap-4 flex-col items-center mb-8">
            {" "}
            <li>
              <span className="text-mainWhite font-semibold  text-3xl md:text-6xl">
                {" "}
                {t("role")}: &#123;
              </span>
            </li>{" "}
            <li>
              <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-neon to-skyBlue text-transparent bg-clip-text break-words">
                Full Stack Developer
              </h2>
            </li>
            <li>
              <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-aqua to-purple text-transparent bg-clip-text break-words">
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
              <span className="text-mainWhite text-3xl md:text-6xl">
                &#125;
              </span>
            </li>
          </ul>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default OpenToWork;
