import { useTranslations } from "next-intl";

import MaxWidthWrapper from "./global/MaxWidthWrapper";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Social from "./Social";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-bg-primary  border-t border-border-secondary dark:border-border-dark dark:bg-bg-dark bg-no-repeat bg-center bg-cover py-20 md:py-[112px] xl:py-[188px]">
      <MaxWidthWrapper>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   place-items-center gap-10">
          <li>
            <h4 className="text-text-primary dark:text-text-inverse text-center mb-6">
              {t("title")}
            </h4>
            <ul className="flex gap-10 justify-center flex-wrap">
              <Social />
            </ul>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <p className="text-text-primary dark:text-text-inverse text-center">
              &#169; {t("author_rules")}
            </p>
          </li>
          <li>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </li>
        </ul>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
