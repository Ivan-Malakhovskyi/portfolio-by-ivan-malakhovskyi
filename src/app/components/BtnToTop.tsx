"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import arrowUp from "/public/icons/ArrowUpwardFilled.svg";

const BtnToTop: FC = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollToTop = () => {
      setShowBtn(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScrollToTop);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`fixed right-12 bottom-40 bg-mainWhite rounded-full w-16 h-16 flex justify-center items-center ${
          showBtn
            ? "block opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition ease-out duration-300 hover:bg-mainGrey`}
      >
        <Image src={arrowUp} width={16} height={16} alt="icon_arrow_up" />
      </button>
    </>
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
