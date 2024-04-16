"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FC, useState } from "react";
import burger from "/public/icons/menu.svg";
import Image from "next/image";
import Modal from "./global/Modal";

const navigation = [
  { id: 1, title: "About me", path: "#about" },
  { id: 2, title: "Experience", path: "#experience" },
  { id: 3, title: "Projects", path: "#projects" },
  { id: 4, title: "Contact me", path: "#contact" },
];

const Navigations: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleClick = () => {
    setShowModal(!showModal);
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
        {showModal && (
          <Modal close={handleToggleClick}>
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              inventore facilis accusantium laboriosam explicabo. Alias
              recusandae doloremque natus nesciunt. Dicta, quasi laborum et
              dolorem ea laudantium amet eius eaque veniam.
            </h2>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Navigations;
