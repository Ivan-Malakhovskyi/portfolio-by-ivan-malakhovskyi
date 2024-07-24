import React, { FC } from "react";
import { WorkedOnListProps } from "../types";

const WorkedOnList: FC<WorkedOnListProps> = ({ workedOn }) => {
  return (
    <ul className="flex flex-col justify-center gap-2">
      {workedOn.map((item, idx) => (
        <li
          className=" inline-block w-auto h-auto border-2 rounded-full border-mainGrey px-2 py-1 break-words"
          key={idx}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default WorkedOnList;
