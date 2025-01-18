"use client";

import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const { useRouter } = createNavigation();

  const router = useRouter();

  const currentPath = usePathname();

  const t = useTranslations("Common");

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLanguage = (newLang: string) => {
    setLanguage(newLang);

    const newPathname = `${newLang}${currentPath.replace(/^\/(en|uk)/, "")}`;
    router.push(newPathname);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        type="button"
        onClick={toggleSelect}
        className="inline-flex w-full justify-between items-center px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {t("label")}
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute z-10 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg focus:outline-none"
          >
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => handleClickLanguage(t("language"))}
              className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
            >
              {t("label")}
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
