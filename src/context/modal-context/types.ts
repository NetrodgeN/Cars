import { ReactNode } from "react";
import { ModalSize } from "../../components/modal/modal.tsx";

export interface ModalItem {
  content: ReactNode;
  modalSize?: ModalSize;
}

export interface ModalContextType {
  closeModal: (closeAll?: boolean) => void;
  openModal: (
    content: ReactNode,
    {
      modalSize,
    }: {
      modalSize?: ModalSize;
    },
  ) => void;
  modals: ModalItem[];
}
