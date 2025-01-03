import {useContext} from "react";
import {ModalContext} from "../context/modal-context/modal-context.tsx";

export const useModal = () => {
    const context = useContext(ModalContext);

    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
