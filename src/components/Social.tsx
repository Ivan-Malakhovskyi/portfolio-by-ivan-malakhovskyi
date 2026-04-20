import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "../constants";

const Social = () => {
  return (
    <>
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
    </>
  );
};

export default Social;
