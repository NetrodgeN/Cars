import Checkbox from "../../../../../components/checkbox/checkbox.tsx";
import { Automakers } from "../../../../types.ts";
import { HeaderContext } from "@tanstack/react-table";
import styles from "./automakers-header.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export const AutomakersHeader = ({
  table,
}: HeaderContext<Automakers, string>) => (
  <div className={cn("automakers-header")}>
    <div className={cn("automakers-header__checkbox-wrapper")}>
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.toggleAllRowsSelected}
      />
    </div>

    <span className={cn("automakers-header__title")}>Автопроизводитель</span>
  </div>
);

AutomakersHeader.displayName = "AutomakersHeader";
