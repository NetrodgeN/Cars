import { Checkbox as HCheckbox, CheckboxProps } from "@headlessui/react";
import styled from "./checkbox.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styled);

function Checkbox({
  checked,
  indeterminate,
  onChange,
  disabled,
  ...otherProps
}: CheckboxProps) {
  return (
      <HCheckbox
          indeterminate={indeterminate}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={cn("checkbox")}
          {...otherProps}
      >
          <svg
              className={cn('checkbox__checkmark')}
              viewBox="0 0 14 14"
              fill="none"
          >
              <path
                  d={indeterminate ? "M3 7L11 7" : "M3 8L6 11L11 3.5"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
          </svg>
      </HCheckbox>
  );
}

export default Checkbox;
