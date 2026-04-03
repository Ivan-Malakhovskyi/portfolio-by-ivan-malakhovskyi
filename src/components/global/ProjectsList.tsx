import React, { FC } from "react";
import { motion } from "framer-motion";
import { IProjectsListProps } from "@/types";

const ProjectsList: FC<IProjectsListProps> = ({
  projects,
  component: Component,
}) => {
  return (
    <ul className="grid items-center justify-center gap-6">
      {projects.map((project) => (
        <motion.li
          key={project.id}
          className="grid grid-cols-1 gap-3 "
          initial={{ opacity: 0, height: "auto" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          exit={{
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Component project={project} />
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectsList;
