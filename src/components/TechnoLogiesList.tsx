import React, { FC } from "react";
import { TechnoLogiesListProps } from "../types";

const TechnoLogiesList: FC<TechnoLogiesListProps> = ({ workedOn }) => {
  return (
    <ul className="flex flex-col justify-center gap-2">
      {workedOn &&
        workedOn.map((item, idx) => (
          <li
            className=" inline-block w-auto h-auto border-2 rounded-full border-mainGrey px-2 py-1 "
            key={idx}
          >
            <p className="break-words text-xs md:text-xl">{item}</p>
          </li>
        ))}
    </ul>
  );
};

export default TechnoLogiesList;
