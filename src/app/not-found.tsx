import React, { FC } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NotFoundPage: FC = () => {
  const t = useTranslations("NotFound");

  return (
    <section>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-screen bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-text-inverse">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-text-primary dark:text-text-inverse mb-8 transition duration-300">
          {t("title")}
        </p>
        <Link
          href="/"
          className="bg-bg-light dark:bg-bg-primary text-text-inverse  rounded-lg px-6 py-3 dark:text-text-primary hover:bg-bg-primary-hover dark:hover:bg-bg-inverse-hover dark:focus:bg-bg-inverse-hover transition ease-out duration-300"
        >
          {t("action")}
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
