import { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode;
  maxwidth?: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, maxwidth }) => {
  return (
    <div
      className="p-5 ml-auto w-full max-w-[23.5rem] rounded-l-3xl h-dvh bg-mainWhite dark:bg-mainDark"
      style={{ maxWidth: maxwidth }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default ModalContent;
