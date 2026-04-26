"use client";

import { FC } from "react";
import NavBar from "./NavBar";
import { useScroll } from "@/hooks/useScroll";
import MaxWidthWrapper from "./global/MaxWidthWrapper";

const Header: FC = () => {
  const { visible } = useScroll();

  return (
    <header
      className={`backdrop-blur-xl bg-bg-primary dark:bg-bg-dark shadow-md fixed z-50 w-full top-0 transition-transform duration-300 
        ${visible ? "transform translate-y-0" : "-translate-y-full"}
        `}
    >
      <MaxWidthWrapper>
        <NavBar />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
