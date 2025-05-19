import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";

interface ILinkIconsProps {
  href: string;
  codeLink: string;
}

const listIcons = [
  {
    id: 1,
    Component: CodeBracketIcon,
  },
  {
    id: 2,
    Component: GlobeAltIcon,
  },
];

const LinkIcons: FC<ILinkIconsProps> = ({ href, codeLink }) => (
  <div className="absolute opacity-0 inset-0 flex items-center justify-center gap-4 group-hover:opacity-100 group-focus:opacity-100  transition ease-out duration-300  hover:bg-addGray rounded-md backdrop-blur-sm  focus:bg-addGray hover:dark:bg-addGray focus:dark:bg-addGray ">
    {" "}
    {listIcons.map(({ Component, id }) => (
      <Link
        key={id}
        href={!href.includes("github.com") && id !== 1 ? href : codeLink}
        className="text-black hover:scale-110  transition ease-out duration-300"
      >
        <Component className=" dark:text-mainWhite" width={40} height={40} />
      </Link>
    ))}
  </div>
);

export default LinkIcons;
