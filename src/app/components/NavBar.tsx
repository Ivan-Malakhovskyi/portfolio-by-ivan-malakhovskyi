"use client";

import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Navigations from "./Navigations";

const NavBar: FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center">
        {" "}
        <span className="">
          {" "}
          <Link href="/" className="py-6 text-mainWhite ">
            Ivan Malakhovskyi
          </Link>
        </span>
        <nav className="ml-auto text-mainWhite">
          {" "}
          <Navigations />
        </nav>
      </div>
    </MaxWidthWrapper>
  );
};

export default NavBar;
