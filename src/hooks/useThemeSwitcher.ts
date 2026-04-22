import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTheme } from "next-themes";

type theme = "system" | "light" | "dark";

export const useThemeSwitcher = () => {
  //! do animate theme change
  const { theme, setTheme } = useTheme();

  const [activeTheme, setActiveTheme] = useState<theme>("system");

  useEffect(() => {
    const currentTheme = Cookies.get("theme") as theme;

    if (currentTheme === "system" || !currentTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(currentTheme);
      setActiveTheme(currentTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

    const handleSystemThemeChange = () => {
      if (currentTheme === "system" || !currentTheme) {
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

  const handleThemeChange = (newTheme: theme) => {
    setActiveTheme(newTheme);

    if (newTheme === "system") {
      applySystemTheme();
      localStorage.setItem("theme", newTheme);
    } else {
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    }

    Cookies.set("theme", newTheme);
  };

  const applySystemTheme = () => {
    const systemPrefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (systemPrefersDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return {
    activeTheme,
    handleThemeChange,
  };
};
