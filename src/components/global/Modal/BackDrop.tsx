import { ReactNode, SyntheticEvent } from "react";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transitions: {
      duration: 0.3,
      type: "spring",
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface BackdropProps {
  onClick: (e: SyntheticEvent) => void;
  children: ReactNode;
  maxheight?: string;
  className?: string;
}

const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  children,
  maxheight,
  className,
}) => {
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="backdrop-blur-lg dark:bg-accentDark bg-secondaryGrey fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 overflow-y-auto w-screen h-screen backdrop-filter  backdrop-grayscale backdrop-contrast-200"
      onClick={onClick}
      style={{ maxHeight: maxheight, zIndex: "10000" }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
