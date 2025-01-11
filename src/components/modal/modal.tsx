import {MouseEvent, ReactNode, useEffect, useRef} from "react";

import classNames from "classnames/bind";

import styles from "./modal.module.scss";

import {useModal} from "../../hooks/use-modal.ts";
import {Portal} from "../portal/portal.tsx";

const cn = classNames.bind(styles)

export type ModalSize = '500' | '800';

export const Modal = ({content, size = '800'}: {content: ReactNode, size?: ModalSize}) => {
    const { closeModal } = useModal();
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeModal]);


    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };



    return (
        <Portal>
            <div className={cn('modal-overlay')} onClick={handleOverlayClick}>
                <div className={cn('modal', `modal--size-${size}`)} ref={modalRef} tabIndex={-1}>
                    <div className={cn('modal__header')}>
                        <button
                            className={cn(
                                'modal__button',
                                "modal__button--close",
                            )}
                            onClick={() => closeModal()}
                            ref={closeButtonRef}
                        >
                            &times;
                        </button>
                    </div>
                    <div className={cn('modal__content')}>
                        {content}
                    </div>
                    <div className={cn('modal__footer')}>

                    </div>
                </div>
            </div>
        </Portal>
    );
};
