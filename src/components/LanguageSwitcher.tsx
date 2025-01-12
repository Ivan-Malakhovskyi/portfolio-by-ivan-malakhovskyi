import { useTranslations } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const LanguageSwitcher = () => {
  const t = useTranslations("Common");

  const { useRouter } = createNavigation();

  const router = useRouter();

  const changeLanguage = () => {
    router;
  };

  return (
    <div>
      <label htmlFor="lang-switcher">{t("label")}</label>
      <select name="lang-switcher">
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
