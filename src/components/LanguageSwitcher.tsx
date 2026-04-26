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
              className={`text-text-primary dark:text-text-inverse hover:bg-bg-light-muted active:bg-bg-light-muted focus:bg-bg-light-muted dark:hover:text-text-primary dark:focus:text-text-primary dark:active:text-text-primary  ${activeLocale ? "border-2 border-border-secondary  dark:border-border-secondary dark:text-text-inverse" : ""}  text-xs font-semibold rounded-xl bg-bg-secondary px-4 py-2 active:dark:text-text-inverse active:border-2 active:dark:border-none active:border-border-secondary transition ease-out duration-300`}
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
