"use client";

import Image from "next/image";
import React, { FC, useEffect, MouseEvent } from "react";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IModalProps } from "./Modal.types";
import icon_close from "/public/icons/x.svg";

const Modal: FC<IModalProps> = ({ close, children }) => {
  useEffect(() => {
    const handleEscClick = ({ code }: KeyboardEvent) => {
      if (code === "Escape") {
        close();
      }

      window.addEventListener("keydown", handleEscClick);
      // disableBodyScroll(document.body);

      return () => {
        window.removeEventListener("keydown", handleEscClick);
        // enableBodyScroll(document.body);
      };
    };
  }, [close]);

  const handleBackDropClick = ({
    target,
    currentTarget,
  }: MouseEvent<HTMLDivElement>) => {
    if (target === currentTarget) {
      close();
    }
  };

  return (
    <div
      onClick={handleBackDropClick}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-y-auto bg-mainBlack z-50"
    >
      {/* {max-w-[428px]  } */}
      <div className="">
        <button
          type="button"
          onClick={close}
          className="text-mainWhite absolute top-5 right-5"
        >
          <Image src={icon_close} width={32} height={32} alt="icon_close" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
