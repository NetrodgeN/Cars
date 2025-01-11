import { ReactNode } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@tanstack/react-router";

import classNames from "classnames/bind";

import cls from "./dropdown.module.scss";
import styles from "../popup.module.scss";
import { DropdownDirection } from "./dropdown-direction-type.ts";
import { mapDirectionClass } from "./dropdown-constants.ts";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  items: DropdownItem[];
  trigger: ReactNode;
  className?: string;
  direction?: DropdownDirection;
}
const cn = classNames.bind({ ...cls, ...styles });

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = "bottom right" } = props;

  const menuClasses = mapDirectionClass[direction];

  return (
    <Menu as="div" className={cn("dropdown", {}, [className, 'popup'])}>
      <MenuButton className={cn("trigger")}>{trigger}</MenuButton>
      <MenuItems className={cn("menu", {}, [menuClasses])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={cn("menu__button", {
                ["active"]: active,
              })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <MenuItem
                key={`dropdown-key-${index}`}
                as={Link}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem key={`dropdown-key-${index}`} disabled={item.disabled}>
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
