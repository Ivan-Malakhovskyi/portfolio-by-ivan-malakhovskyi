"use client";

import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import Navigation from "./Navigation";
import { useTranslations } from "next-intl";

const NavBar: FC = () => {
  const t = useTranslations("Header");

  return (
    <MaxWidthWrapper>
      <div className="flex items-center gap-10">
        {" "}
        <span className="">
          <Link href="/" className="py-6 dark:text-mainWhite ">
            {t("logo")}
          </Link>
        </span>
        <nav className="ml-auto dark:text-mainWhite">
          {" "}
          <Navigation />
        </nav>
      </div>
    </MaxWidthWrapper>
  );
};

export default NavBar;
