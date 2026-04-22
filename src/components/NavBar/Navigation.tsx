"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavList from "./NavList";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import Social from "../Social";
import ThemeSwitcher from "../ThemeSwitcher";

const Modal = dynamic(() => import("../global/Modal"), { ssr: false });

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
          <Bars3Icon className="size-6 text-mainBlack dark:text-white" />
        </button>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {showModal && (
            <Modal close={handleToggleClick} showModal={showModal}>
              <div className="flex flex-col gap-2 justify-between h-full overflow-scroll">
                <div className="flex flex-col gap-4 border-b border-addBgGrey dark:border-bgGrey pb-8">
                  <Link href="/" className="text-lg font-semibold">
                    Ivan Malakhovskyi
                  </Link>
                  <LanguageSwitcher />
                </div>
                <ul className="flex flex-col gap-2">
                  <NavList action={handleLinkClick} />
                </ul>
                <ul className="flex justify-between">
                  <Social />
                </ul>
                <ThemeSwitcher />
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
