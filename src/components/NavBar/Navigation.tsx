"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavList from "./NavList";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Modal = dynamic(() => import("../global/Modal"));

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
      </ul>
      <div className="md:hidden flex items-center gap-8">
        <button
          type="button"
          onClick={handleToggleClick}
          aria-label="Toggle menu"
        >
          <Bars3Icon className="size-6 text-mainBlack dark:text-white" />
        </button>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {showModal && (
            <Modal close={handleToggleClick} showModal={showModal}>
              <div className="relative bg-purpleMain"></div>
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
