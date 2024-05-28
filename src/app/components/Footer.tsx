import Link from "next/link";
import { socialLinks } from "../constants";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer className="bg-mainBlack py-10 ">
        <h4 className="text-mainGrey text-center mb-6">Social</h4>

        <ul className="flex gap-10 justify-center mb-6">
          {socialLinks.map(({ id, href, icon, alt }) => (
            <li
              key={id}
              className="transform transition duration-300 hover:rotate-12 & hover:scale-110 focus:rotate-12"
            >
              {
                <Link href={href}>
                  <Image src={icon} alt={alt} width={32} height={32} />
                </Link>
              }
            </li>
          ))}
        </ul>

        <p className="text-mainGrey text-center">&#169; All Rights Reserved</p>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
