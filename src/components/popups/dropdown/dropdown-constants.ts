import {DropdownDirection} from "./dropdown-direction-type.ts";
import cls from '../popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top right": cls.optionsTopRight,
    "top left": cls.optionsTopLeft,
};
