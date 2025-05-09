"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useTranslations } from "next-intl";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const NavBar: FC = () => {
  const [activeTheme, setActiveTheme] = useState<string>("system");
  const t = useTranslations("Header");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "system" || !currentTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(currentTheme);
      setActiveTheme(currentTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-schema:dark)");

    const handleSystemThemeChange = () => {
      if (!currentTheme || currentTheme !== "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "system") {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  const applySystemTheme = () => {
    const systemPrefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (systemPrefersDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center gap-10 px-4">
      {" "}
      <span className="">
        <Link href="/" className="py-6 dark:text-mainWhite ">
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
