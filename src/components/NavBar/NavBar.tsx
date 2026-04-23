"use client";

import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "next-intl";

import Navigation from "./Navigation";

const NavBar: FC = () => {
  const t = useTranslations("Header");

  return (
    <div className="flex items-center gap-10">
      {" "}
      <span>
        <Link
          href={"/"}
          className="py-4 md:py-6 font-semibold text-sm hover:text-mainBlack focus:text-mainBlack text-[var(--mainSlate)] dark:text-mainWhite"
        >
          {t("logo")}
        </Link>
      </span>
      <div className="ml-auto flex items-center gap-4 ">
        {" "}
        <nav className=" dark:text-mainWhite">
          <Navigation />
        </nav>
      </div>{" "}
    </div>
  );
};

export default NavBar;
