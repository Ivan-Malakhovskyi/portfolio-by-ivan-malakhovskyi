"use client";

import { createNavigation } from "next-intl/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("");

  const { useRouter } = createNavigation();

  const router = useRouter();

  const currentPath = usePathname();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;

    setLanguage(newLang);

    const newPathname = `${newLang}${currentPath.replace(/^\/(en|uk)/, "")}`;
    router.push(newPathname);
  };

  return (
    <div className="bg-transparent">
      <select
        name="lang-switcher"
        value={language}
        onChange={handleChangeLanguage}
        className="block px-4 py-2 md:text-base text-sm focus:outline-none focus:ring-2 cursor-pointer transition"
      >
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
