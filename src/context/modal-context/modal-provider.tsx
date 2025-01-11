import {ReactNode, useCallback, useState} from "react";
import {ModalItem} from "./types.ts";
import {Modal, ModalSize} from "../../components/modal/modal.tsx";
import {ModalContext} from "./modal-context.tsx";

export const ModalProvider = ({children}: { children: ReactNode }) => {
    const [modals, setModals] = useState<ModalItem[]>([]);

    const openModal = useCallback((content: ReactNode, {modalSize}: {modalSize?: ModalSize}) => {
        setModals((prevModals) => [...prevModals, {content, modalSize}]);
    }, []);

    const closeModal = useCallback((closeAll: boolean = false) => {
        if (closeAll) {
            setModals([]);
        } else {
            setModals((prevModals) => prevModals.slice(0, -1));
        }
    }, []);

    return (
        <ModalContext.Provider value={{openModal, modals, closeModal}}>
            {children}
            {
            modals.map((modalContent, index) => (
                <Modal key={index} content={modalContent.content} size={modalContent?.modalSize}/>
            ))
        }</ModalContext.Provider>
    );
};
