"use client";

import Image from "next/image";
import { FC, useEffect, SyntheticEvent } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IModalProps } from "./Modal.types";
import icon_close from "/public/icons/x.svg";
import Backdrop from "./BackDrop";
import ModalContent from "./ModalContent";

const Modal: FC<IModalProps> = ({ close, children }) => {
  useEffect(() => {
    const handleEscClick = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        close();
      }
    };

    if (!window?.location?.hash) {
      disableBodyScroll(document.body);
    }

    return () => {
      window.removeEventListener("keydown", handleEscClick);
      enableBodyScroll(document.body);
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
          className="text-mainWhite absolute top-5 right-5"
        >
          <Image src={icon_close} width={32} height={32} alt="icon_close" />
        </button>
        {children}
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;
