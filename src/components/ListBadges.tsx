import React, { FC } from "react";
import { ListBadgesProps } from "@/types";

const ListBadges: FC<ListBadgesProps> = ({ list, title }) => {
  return (
    <div className="flex items-start gap-2">
      <p className="text-text-primary text-xs md:text-base xl:text-lg font-semibold dark:text-text-inverse mb-2">
        {title}:
      </p>
      <ul className="flex flex-wrap gap-2">
        {list?.map((item, idx) => (
          <li key={idx}>
            <span className="text-xs md:text-sm xl:text-lg p-[0.125rem] md:px-2 border-2 font-semibold rounded-full text-text-primary dark:text-text-inverse border-border-muted">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBadges;
