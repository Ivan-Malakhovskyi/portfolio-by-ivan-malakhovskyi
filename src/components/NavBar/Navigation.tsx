"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavList from "./NavList";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MobileMenu from "../Projects/MobileMenu";

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
      <div className="md:hidden">
        <button
          type="button"
          onClick={handleToggleClick}
          aria-label="Toggle menu"
        >
          <Bars3Icon className="size-6 text-text-primary dark:text-text-inverse" />
        </button>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {showModal && (
            <MobileMenu
              show={showModal}
              handleToggle={handleToggleClick}
              handleLinkClick={handleLinkClick}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
