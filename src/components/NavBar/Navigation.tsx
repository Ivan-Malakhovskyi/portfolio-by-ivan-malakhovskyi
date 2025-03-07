"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Modal from "../global/Modal";
import NavList from "./NavList";
import { Bars3Icon } from "@heroicons/react/24/solid";

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
        <button type="button" onClick={handleToggleClick}>
          <Bars3Icon className="size-6 text-mainBlack dark:text-white" />
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
