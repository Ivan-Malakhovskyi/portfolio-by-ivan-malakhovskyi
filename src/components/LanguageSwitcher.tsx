"use client";

import { useTranslations } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

const locales = [
  { id: 1, label: "EN", locale: "en" },
  { id: 2, label: "UA", locale: "uk" },
];

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Cookies.get("NEXT_LOCALE"));

  const { useRouter } = createNavigation();

  const router = useRouter();

  const currentPath = usePathname();
  const localeFromURL = currentPath.split("/")[1];

  const t = useTranslations("Common");

  const handleClickLanguage = (newLang: string) => {
    Cookies.set("NEXT_LOCALE", newLang);
    setLanguage(newLang);
    const newPathname = `${newLang}${currentPath.replace(/^\/(en|uk)/, "")}`;
    router.push(newPathname);
  };

  return (
    <ul className="flex items-center gap-4">
      {locales.map(({ id, label, locale }) => {
        const activeLocale = locale === (localeFromURL || language);

        return (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClickLanguage(t("language"))}
              className={`text-mainBlack ${activeLocale ? "border-2 border-mainGrey  dark:border-accentWhite  dark:text-mainWhite" : "dark:text-addGray text-current"} text-xs font-semibold rounded-xl bg-secondaryWhite px-4 py-2 active:dark:text-mainWhite active:border-2 active:dark:border-none active:border-mainGrey`}
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
