import { Button, BUTTON_SIZE } from "../../buttons";
import classNames from "classnames/bind";
import styles from "../table.module.scss";
import { Table } from "@tanstack/react-table";

const cn = classNames.bind(styles);

interface FooterProps<TData> {
  table: Table<TData>;
}

export const TableFooter = <TData,>({ table }: FooterProps<TData>) => {
  const { rowSelection } = table.getState();
  const selectedIds = Object.keys(rowSelection)

  return (
    <div className={cn("table__footer")}>
      <span>выбрано {selectedIds.length || 0} строк</span>
      {selectedIds.length !== 0 && (
        <Button
          onClick={() => {
            table.resetRowSelection(true);
            table.options.meta?.removeRow(selectedIds);
          }}
          label={"Удалить"}
          size={BUTTON_SIZE.SMALL}
          primary
        />
      )}
    </div>
  );
};

TableFooter.displayName = "TableFooter";
