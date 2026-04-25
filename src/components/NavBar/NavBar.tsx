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
          className="py-4 md:py-6 font-semibold text-sm hover:text-text-primary focus:text-text-primary text-text-muted dark:text-text-inverse"
        >
          {t("logo")}
        </Link>
      </span>
      <div className="ml-auto flex items-center gap-4 ">
        {" "}
        <nav>
          <Navigation />
        </nav>
      </div>{" "}
    </div>
  );
};

export default NavBar;
