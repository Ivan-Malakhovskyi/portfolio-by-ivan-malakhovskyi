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
}

const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  children,
  maxheight,
}) => {
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed top-0 left-0  w-screen h-screen flex justify-center items-center overflow-y-scroll  backdrop-filter  backdrop-grayscale  backdrop-blur-[10px] backdrop-contrast-200 "
      onClick={onClick}
      style={{ maxHeight: maxheight, zIndex: "10000" }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
