"use client";

import React from "react";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  // console.log(window.matchMedia("(prefers-color-scheme:dark)").matches);
  const { activeTheme, handleThemeChange } = useThemeSwitcher();
  return (
    <ul className="flex items-center gap-2">
      {" "}
      <li>
        <button
          onClick={() => handleThemeChange("system")}
          type="button"
          aria-label="Appearance: system theme"
        >
          <ComputerDesktopIcon
            className={`transition ease-out duration-300 size-5 text-bgGrey ${activeTheme === "system" ? "fill-mainBlack dark:fill-mainWhite" : "fill-current"}`}
          />
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
            className={`transition text-bgGrey ease-out duration-300 size-5 ${
              activeTheme === "light" ? "stroke-orange-500 fill-orange-500" : ""
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
            className={`transition ease-out duration-300 size-5 ${
              activeTheme === "dark"
                ? "fill-accentBlue"
                : "fill-bgGrey stroke-none"
            }`}
          />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
