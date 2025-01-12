"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import burger from "/public/icons/menu.svg";
import Image from "next/image";
import Modal from "../global/Modal";
import NavList from "./NavList";
import LanguageSwitcher from "../LanguageSwitcher";

const Navigation: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleToggleClick = () => {
    setShowModal(!showModal);
  };

  const handleLinkClick = (path: string) => {
    setShowModal(false);
    router.push(path);
  };

  return (
    <>
      <ul className="md:flex md:gap-8 hidden items-center">
        <NavList action={handleLinkClick} />
        <LanguageSwitcher />
      </ul>
      <div className="md:hidden flex items-center gap-8">
        <LanguageSwitcher />
        <button type="button" onClick={handleToggleClick}>
          <Image src={burger} width={32} height={32} alt="burger_icon" />
        </button>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {showModal && (
            <Modal close={handleToggleClick} showModal={showModal}>
              <ul className="text-center ">
                <NavList action={handleLinkClick} />
              </ul>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
