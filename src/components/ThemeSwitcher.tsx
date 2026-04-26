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
            className={`transition ease-out duration-300 size-5 text-text-muted fill-current ${activeTheme === "system" ? "fill-text-text-primary dark:fill-text-inverse" : null}`}
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
            className={`transition text-text-muted ease-out duration-300 size-5 fill-none stroke-text-muted ${
              activeTheme === "light"
                ? "stroke-text-accent fill-text-accent"
                : null
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
            className={`transition ease-out duration-300 size-5 stroke-text-muted ${
              activeTheme === "dark" ? "fill-primary" : null
            }`}
          />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
