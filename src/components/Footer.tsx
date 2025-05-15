import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { socialLinks } from "../constants";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black bg-no-repeat bg-center bg-cover py-20 md:py-[112px] xl:py-[188px]">
      <MaxWidthWrapper>
        <h4 className=" text-center mb-6">{t("title")}</h4>
        <ul className="flex gap-10 justify-center mb-6 flex-wrap">
          {socialLinks.map(({ id, href, icon, alt }) => (
            <li
              key={id}
              className="transform transition duration-300 hover:rotate-12 & hover:scale-110 focus:rotate-12"
            >
              {
                <Link href={id === 5 ? `mailto:${href}` : href} target="_blank">
                  <Image src={icon} alt={alt} width={32} height={32} />
                </Link>
              }
            </li>
          ))}
        </ul>
        <p className=" text-center">&#169; {t("author_rules")}</p>
        <div className="flex justify-center mt-10">
          <LanguageSwitcher />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
