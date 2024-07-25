import { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode;
  maxwidth?: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, maxwidth }) => {
  return (
    <div
      style={{ maxWidth: maxwidth }}
      className=""
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default ModalContent;
