import classNames from "classnames/bind";

import { TextInput, TextInputProps } from "../text-input/text-input.tsx";

import styles from "./validatable-input.module.scss";

const cn = classNames.bind(styles);

interface Props extends TextInputProps {
  errorMessage?: string;
  title?: string;
}

export const ValidatableInput = ({
  errorMessage,
  title,
  ...otherProps
}: Props) => {
  const isError = Boolean(errorMessage);

  return (
    <div className={cn("validatable-input__wrapper")}>
      <span className={cn("validatable-input__title")}>{title}</span>
      <TextInput {...otherProps} isError={isError} />
      {errorMessage ? (
        <span className={cn("validatable-input__error")}>{errorMessage}</span>
      ) : null}
    </div>
  );
};

ValidatableInput.displayName = "ValidatableInput";
