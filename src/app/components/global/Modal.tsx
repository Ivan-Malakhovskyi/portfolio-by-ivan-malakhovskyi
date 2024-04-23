"use client";

import Image from "next/image";
import { FC, useEffect, MouseEvent, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IModalProps } from "./Modal.types";
import { motion } from "framer-motion";
import icon_close from "/public/icons/x.svg";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transitions: {
      duration: 0.3,
      type: "spring",
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: FC<IModalProps> = ({ close, showModal, children }) => {
  useEffect(() => {
    const handleEscClick = ({ code }: KeyboardEvent) => {
      console.log(code);
      if (code === "Escape") {
        close();
      }

      document.addEventListener("keydown", handleEscClick);
      disableBodyScroll(document.body);

      return () => {
        document.removeEventListener("keydown", handleEscClick);
        enableBodyScroll(document.body);
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
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackDropClick}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-y-auto backdrop-filter  backdrop-grayscale  backdrop-blur-[10px] backdrop-contrast-200  z-50"
    >
      {/* {max-w-[428px]  } */}
      <div>
        <button
          type="button"
          onClick={close}
          className="text-mainWhite absolute top-5 right-5"
        >
          <Image src={icon_close} width={32} height={32} alt="icon_close" />
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default Modal;
