"use client";

import { useTranslations } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

const locales = [
  { id: 1, label: "EN", locale: "en" },
  { id: 2, label: "UA", locale: "uk" },
];

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Cookies.get("NEXT_LOCALE") || "en");
  console.log("🚀 ~ LanguageSwitcher ~ language:", language);

  const { useRouter } = createNavigation();

  const router = useRouter();

  const currentPath = usePathname();

  const t = useTranslations("Common");

  const handleClickLanguage = (newLang: string) => {
    Cookies.set("NEXT_LOCALE", newLang);
    setLanguage(newLang);
    const newPathname = `${newLang}${currentPath.replace(/^\/(en|uk)/, "")}`;
    router.push(newPathname);
  };

  return (
    <ul className="flex gap-4">
      {locales.map(({ id, label, locale }) => {
        const activeLocale = locale === language;

        return (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClickLanguage(t("language"))}
              className={`${activeLocale ? "border-2 border-mainGrey text-mainBlack dark:border-accentWhite  dark:text-mainWhite" : "dark:text-addGray"} text-xs font-semibold rounded-xl bg-secondaryWhite px-4 py-2 active:dark:text-mainWhite active:border active:dark:border-none active:border-mainGrey`}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitcher;
