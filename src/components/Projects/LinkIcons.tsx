import { FC } from "react";
import Link from "next/link";
import { CommandLineIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ILinkIconsProps {
  href: string;
  codeLink: string;
}

const listIcons = [
  {
    id: 1,
    Component: CommandLineIcon,
  },
  {
    id: 2,
    Component: EyeIcon,
  },
];

const LinkIcons: FC<ILinkIconsProps> = ({ href, codeLink }) => (
  <div className="absolute opacity-0 inset-0 flex items-center justify-center gap-4 group-hover:opacity-100 group-focus:opacity-100 transition ease-out duration-300 backdrop-blur-sm rounded-md ">
    {" "}
    {listIcons.map(({ Component, id }) => (
      <Link
        key={id}
        href={!href.includes("github.com") && id !== 1 ? href : codeLink}
        target="_blank"
        className="text-black hover:scale-110  transition ease-out duration-300"
      >
        <Component className="fill-mainWhite" width={28} height={28} />
      </Link>
    ))}
  </div>
);

export default LinkIcons;
