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
          className="[&:is(:hover,:focus,:active)>svg]:fill-text-primary dark:[&:is(:hover,:focus,:active)>svg]:fill-text-inverse transition ease-out duration-300"
        >
          <ComputerDesktopIcon
            className={`size-5 text-text-muted fill-current ${activeTheme === "system" ? "fill-text-text-primary dark:fill-text-inverse" : null}`}
          />
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => handleThemeChange("light")}
          aria-label="Appearance: light theme"
          className="[&:is(:hover,:focus,:active)>svg]:fill-accent-hover [&:is(:hover,:focus,:active)>svg]:stroke-accent-hover ease-out duration-300"
        >
          {" "}
          <SunIcon
            className={`transition text-text-muted size-5 fill-none ${
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
          className="[&:is(:hover,:focus,:active)>svg]:fill-primary-hover [&:is(:hover,:focus,:active)>svg]:stroke-primary-hover transition ease-out duration-300"
        >
          <MoonIcon
            className={`size-5 stroke-text-muted  ${
              activeTheme === "dark" ? "fill-primary border-none" : null
            }`}
          />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
