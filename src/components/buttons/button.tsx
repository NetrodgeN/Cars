import { ReactNode, SyntheticEvent } from "react";

import classNames from "classnames/bind";

import styles from "./button.module.scss";
import { BUTTON_SIZE } from "./button-constants.tsx";

const cn = classNames.bind(styles);

interface ButtonProps {
  icon?: ReactNode;
  isUpperCase?: boolean;
  label?: string;
  disabled?: boolean;
  onClick?: (event?: SyntheticEvent) => void;
  size?: BUTTON_SIZE;
  primary?: boolean;
}

export const Button = ({
  icon,
  isUpperCase,
  label,
  disabled = false,
  onClick,
  size = BUTTON_SIZE.MEDIUM,
  primary,
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={cn("button", `button--${size}`, {
        "button--primary": primary,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={cn("button__icon")}>{icon}</span>}
      {isUpperCase && label ? label.toUpperCase() : label}
    </button>
  );
};

Button.displayName = "Button";
