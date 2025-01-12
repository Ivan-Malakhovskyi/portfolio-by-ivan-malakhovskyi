import React, { FC } from "react";
import { RolesListProps } from "@/types";

const RolesList: FC<RolesListProps> = ({ role }) => {
  return (
    <>
      {role.map((item, idx) => (
        <span
          className="ml-2 border-2 text-xs md:text-xl rounded-full border-mainGrey px-2 py-[2px]"
          key={idx}
        >
          {item}
        </span>
      ))}
    </>
  );
};

export default RolesList;
