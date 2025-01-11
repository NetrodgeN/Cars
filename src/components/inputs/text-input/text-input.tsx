import {
  ChangeEvent,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
} from "react";

import classNames from "classnames/bind";

import styles from "./text-input.module.scss";

const cn = classNames.bind(styles);

export interface TextInputProps {
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
  isError?: boolean;
}

export const TextInput = forwardRef(
  (
    {
      name,
      value,
      placeholder,
      disabled,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      isError,
      ...anotherProps
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        {...anotherProps}
        value={value}
        className={cn("input", {
          "input--invalid": isError,
        })}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        ref={ref}
        name={name}
      />
    );
  },
);

TextInput.displayName = "TextInput";
