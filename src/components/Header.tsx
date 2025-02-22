"use client";

import React, { FC, useEffect, useState } from "react";
import NavBar from "./NavBar";

const Header: FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`backdrop-blur-md dark:bg-mainBlack shadow-md sticky z-50 w-full top-0 transition-transform duration-300 
        ${visible ? "transform translate-y-0" : "-translate-y-full"}
        `}
    >
      <NavBar />
    </header>
  );
};

export default Header;
