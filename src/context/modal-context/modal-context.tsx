import {createContext} from "react";
import {ModalContextType} from "./types.ts";

export const ModalContext = createContext<ModalContextType | undefined>(
    undefined,
);

