import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import NavList from "../NavBar/NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import Social from "../Social";

const Modal = dynamic(() => import("../global/Modal"), { ssr: false });

interface IModalMenuProps {
  handleToggle: () => void;
  handleLinkClick: (path: string) => void;
  show: boolean;
}

const MobileMenu: FC<IModalMenuProps> = ({
  show,
  handleToggle,
  handleLinkClick,
}) => {
  return (
    <Modal close={handleToggle} showModal={show}>
      <div className="flex-1 flex flex-col gap-2 justify-between h-full overflow-y-auto">
        <div className="flex flex-col gap-4 border-b border-border-primary dark:border-border-secondary pb-8 ">
          <Link
            href="/"
            className="text-lg font-semibold text-text-muted dark:text-text-inverse"
          >
            Ivan Malakhovskyi
          </Link>
          <LanguageSwitcher />
        </div>
        <ul className="flex flex-col gap-2 ">
          <NavList action={handleLinkClick} />
        </ul>

        <ThemeSwitcher />
        <ul className="flex justify-between">
          <Social />
        </ul>
      </div>
    </Modal>
  );
};

export default MobileMenu;
