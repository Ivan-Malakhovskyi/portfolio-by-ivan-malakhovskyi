"use client";

import { FC, useEffect, SyntheticEvent } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IModalProps } from "./Modal.types";
import Backdrop from "./BackDrop";
import ModalContent from "./ModalContent";

const Modal: FC<IModalProps> = ({ close, children }) => {
  useEffect(() => {
    const handleEscClick = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEscClick);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscClick);
      document.body.style.overflow = "";
    };
  }, [close]);

  const handleBackdropClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <button
          type="button"
          onClick={close}
          className={`top-5 right-5 text-gray-600 dark:text-mainWhite absolute `}
        >
          <XMarkIcon
            width={40}
            height={40}
            className="size-6 text-mainBlack dark:text-white"
          />
        </button>
        {children}
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;
