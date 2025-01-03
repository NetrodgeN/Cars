import {ReactNode} from "react";

export interface ModalItem {
    content: ReactNode;
    // id: number;
}

export interface ModalContextType {
    closeModal: (closeAll?: boolean) => void;
    openModal: (content: ReactNode) => void;
    modals: ModalItem[];
}
