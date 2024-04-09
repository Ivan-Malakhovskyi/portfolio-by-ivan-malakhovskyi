"use client";

import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { usePathname } from "next/navigation";

const navigation = [
  { id: 1, title: "About me", path: "/about" },
  { id: 2, title: "Experience", path: "/experience" },
  { id: 3, title: "Projects", path: "/projects" },
  { id: 4, title: "Contact me", path: "/contact" },
];

const NavBar: FC = () => {
  const pathName = usePathname();

  return (
    <MaxWidthWrapper>
      <div className="lg:flex ">
        {" "}
        <span className="">
          {" "}
          <Link href="/" className="py-6 text-mainWhite ">
            Ivan Malakhovskyi
          </Link>
        </span>
        <nav className="lg:ml-auto text-mainWhite">
          {" "}
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
        </nav>
      </div>
    </MaxWidthWrapper>
  );
};

export default NavBar;
