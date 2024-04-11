"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FC } from "react";

const navigation = [
  { id: 1, title: "About me", path: "#about" },
  { id: 2, title: "Experience", path: "#experience" },
  { id: 3, title: "Projects", path: "#projects" },
  { id: 4, title: "Contact me", path: "#contact" },
];

const Navigations: FC = () => {
  const pathName = usePathname();
  return (
    <>
      <ul className="lg:flex gap-8  ">
        {navigation.map(({ id, title, path }) => {
          const isActive = pathName === path;

          return (
            <li key={id}>
              <Link
                href={path}
                className={`py-6 hover:text-mainGreen focus:text-mainGreen transition ease-out duration-300 ${
                  isActive ? "text-mainGreen" : ""
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigations;
