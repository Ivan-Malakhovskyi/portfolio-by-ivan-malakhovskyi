import Link from "next/link";
import { useTranslations } from "next-intl";
import { socialLinks } from "../constants";
import MaxWidthWrapper from "./global/MaxWidthWrapper";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-gray-400 py-10 animate-gradient-x">
      <MaxWidthWrapper>
        <h4 className=" text-center mb-6">{t("title")}</h4>

        <ul className="flex gap-10 justify-center mb-6">
          {socialLinks.map(({ id, href, icon, alt }) => (
            <li
              key={id}
              className="transform transition duration-300 hover:rotate-12 & hover:scale-110 focus:rotate-12"
            >
              {
                <Link href={href} target="_blank">
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
