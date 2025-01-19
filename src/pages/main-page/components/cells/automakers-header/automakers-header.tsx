import Checkbox from "../../../../../components/checkbox/checkbox.tsx";
import { Automakers } from "../../../../types.ts";
import { HeaderContext } from "@tanstack/react-table";
import styles from "./automakers-header.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export const AutomakersHeader = ({
  table,
  header,
}: HeaderContext<Automakers, string>) => {
  return (
    <div className={cn("automakers-header")}>
      <div className={cn("automakers-header__checkbox-wrapper")}>
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.toggleAllRowsSelected}
        />
      </div>
      <span
        onClick={header.column.getToggleSortingHandler()}
        className={cn("automakers-header__title", {
          "automakers-header__title--sorting": header.column.getCanSort(),
        })}
      >
        Автопроизводитель
      </span>
    </div>
  );
};

AutomakersHeader.displayName = "AutomakersHeader";
