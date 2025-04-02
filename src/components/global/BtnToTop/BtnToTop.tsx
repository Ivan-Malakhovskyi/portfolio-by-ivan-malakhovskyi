"use client";

import { FC, useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const BtnToTop: FC = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollToTop = () => {
      setShowBtn(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScrollToTop);

    return () => window.removeEventListener("scroll", handleScrollToTop);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="To top"
      className={`z-1000 fixed right-4 p-2 bottom-10 lg:right-12 lg:bottom-40 bg-mainBlue dark:bg-mainWhite rounded-full w-12 h-12 flex justify-center items-center ${
        showBtn ? "block opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition ease-out duration-300 hover:bg-accentBlue dark:hover:bg-accentGrey`}
    >
      <ArrowUpIcon className="size-4 text-mainWhite dark:text-mainGrey " />
    </button>
  );
};

export default BtnToTop;

// export interface TopLevel {
//   navigation: Navigation[];
// }

// export interface Navigation {
//   id: number;
//   title: string;
//   path: string;
// }
