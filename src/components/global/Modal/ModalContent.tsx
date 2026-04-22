import { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode;
  maxwidth?: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, maxwidth }) => {
  return (
    <div
      className="p-5 ml-auto w-[90%] rounded-l-3xl h-full overflow-hidden bg-mainWhite dark:bg-mainDark"
      style={{ maxWidth: maxwidth }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default ModalContent;
