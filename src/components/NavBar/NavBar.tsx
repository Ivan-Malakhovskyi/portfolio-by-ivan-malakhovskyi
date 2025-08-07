"use client";

import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

import Navigation from "./Navigation";
import { useTheme } from "@/hooks/useTheme";

const NavBar: FC = () => {
  const t = useTranslations("Header");
  const { activeTheme, handleThemeChange } = useTheme();

  return (
    <div className="flex items-center gap-10">
      {" "}
      <span>
        <Link href={"/"} className="py-6 dark:text-mainWhite">
          {t("logo")}
        </Link>
      </span>
      <div className="ml-auto flex items-center gap-4 ">
        {" "}
        <ul className="flex items-center gap-2 mr-4">
          {" "}
          <li>
            <button
              onClick={() => handleThemeChange("system")}
              type="button"
              className={`p-1 text-base text-mainBlack  dark:text-mainWhite ${
                activeTheme === "system"
                  ? "bg-mainGrey rounded-lg"
                  : "bg-transparent"
              }`}
            >
              {t("os")}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleThemeChange("light")}
              aria-label="Appearance: light theme"
            >
              {" "}
              <SunIcon
                className={`transition text-mainWhite dark:text-mainBlack ease-out duration-300 size-6 ${
                  activeTheme === "light"
                    ? "stroke-orange-500 fill-orange-500"
                    : "dark:stroke-mainWhite stroke-mainBlack  fill-black dark:fill-mainWhite "
                }`}
              />
            </button>
          </li>
          <li>
            {" "}
            <button
              type="button"
              aria-label="Toggle dark theme"
              onClick={() => handleThemeChange("dark")}
            >
              <MoonIcon
                className={`transition ease-out duration-300 size-6 ${
                  activeTheme === "dark" ? "fill-accentBlue" : "fill-mainWhite"
                }`}
              />
            </button>
          </li>
        </ul>
        <nav className=" dark:text-mainWhite">
          <Navigation />
        </nav>
      </div>{" "}
    </div>
  );
};

export default NavBar;
