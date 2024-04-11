"use client";

import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Navigations from "./Navigations";

const NavBar: FC = () => {
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
          <Navigations />
        </nav>
      </div>
    </MaxWidthWrapper>
  );
};

export default NavBar;
