import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { SyntheticEvent } from "react";

interface INavListProps {
  action?: (path: string) => void;
}

const NavList: React.FC<INavListProps> = ({ action }) => {
  const pathName = usePathname();
  const t = useTranslations("Header");

  const navigation = [
    { id: 1, title: t("about"), path: "#about" },
    { id: 2, title: t("experience"), path: "#experience" },
    { id: 3, title: t("certificates"), path: "#certificates" },
    { id: 4, title: t("hard_skills"), path: "#hard_skills" },
    { id: 5, title: t("soft_skills"), path: "#soft_skills" },
    { id: 6, title: t("projects"), path: "#projects" },
  ];

  const handleClick = (e: SyntheticEvent, path: string) => {
    e.preventDefault();

    if (action) {
      action(path);
    }
  };

  return (
    <>
      {navigation.map(({ id, title, path }) => {
        const isActive = pathName === path;

        return (
          <li key={id}>
            <Link
              href={path}
              className={`py-6 hover:text-blue-500 focus:text-blue-500   dark:hover:text-mainGreen dark:focus:text-mainGreen transition ease-out duration-300 ${
                isActive ? "dark:text-mainGreen text-blue-500" : ""
              }`}
              onClick={(e) => handleClick(e, path)}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavList;
