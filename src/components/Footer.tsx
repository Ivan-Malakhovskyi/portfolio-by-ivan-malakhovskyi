import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { socialLinks } from "../constants";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black bg-no-repeat bg-center bg-cover py-20 md:py-[112px] xl:py-[188px]">
      <MaxWidthWrapper>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   place-items-center gap-10">
          <li>
            <h4 className=" text-center mb-6">{t("title")}</h4>
            <ul className="flex gap-10 justify-center flex-wrap">
              {socialLinks.map(({ id, href, icon, alt }) => (
                <li
                  key={id}
                  className="transform transition duration-300 hover:rotate-12 & hover:scale-110 focus:rotate-12"
                >
                  {
                    <Link
                      href={id === 5 ? `mailto:${href}` : href}
                      target="_blank"
                    >
                      <Image src={icon} alt={alt} width={32} height={32} />
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <p className=" text-center">&#169; {t("author_rules")}</p>
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
