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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-mainBlack fixed z-50 w-full top-0 transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavBar />
    </header>
  );
};

export default Header;
