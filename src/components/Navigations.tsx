"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FC, useState } from "react";
import burger from "/public/icons/menu.svg";
import Image from "next/image";
import Modal from "./global/Modal";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { AnimatePresence } from "framer-motion";

const navigation = [
  { id: 1, title: "About me", path: "#about" },
  { id: 2, title: "Experience", path: "#experience" },
  { id: 3, title: "Certificates", path: "#certificates" },
  { id: 4, title: "Skills", path: "#skills" },
  { id: 5, title: "Projects", path: "#projects" },
];

const Navigations: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleToggleClick = () => {
    setShowModal(!showModal);
  };

  const handleLinkClick = (path: string) => {
    setShowModal(false);
    router.push(path);
  };

  const pathName = usePathname();
  return (
    <>
      <ul className="md:flex md:gap-8 hidden">
        {navigation.map(({ id, title, path }) => {
          const isActive = pathName === path;

          return (
            <li key={id}>
              <Link
                href={path}
                className={`py-6 hover:text-mainGreen focus:text-mainGreen transition ease-out duration-300 ${
                  isActive ? "text-mainGreen" : ""
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="md:hidden">
        {" "}
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
              <MaxWidthWrapper>
                <ul className="text-center">
                  {navigation.map(({ id, title, path }) => {
                    const isActive = pathName === path;

                    return (
                      <li key={id}>
                        <Link
                          href={path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(path);
                          }}
                          className={`py-6 hover:text-mainGreen focus:text-mainGreen transition ease-out duration-300 ${
                            isActive ? "text-mainGreen" : ""
                          }`}
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </MaxWidthWrapper>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigations;
