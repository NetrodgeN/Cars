import {
  ChangeEvent,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

import classNames from "classnames/bind";

import styles from "./text-input.module.scss";

const cn = classNames.bind(styles);

export interface TextInputProps {
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: MouseEventHandler<any> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
  isError?: boolean;
  size?: "small" | "medium";
  readonly?: boolean;
  className?: string;
}

export const TextInput = forwardRef(
  (
    {
      className,
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
      readonly,
      size = "medium",
      ...anotherProps
    }: TextInputProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        {...anotherProps}
        value={value}
        className={cn("input", `input--${size}`, {
          "input--invalid": isError,
        }, className)}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        ref={ref}
        name={name}
        readOnly={readonly}
      />
    );
  },
);

TextInput.displayName = "TextInput";
