import { ReactNode } from "react";

export interface IModalProps {
  close: () => void;
  showModal: boolean;
  children: ReactNode;
}
