import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  Row,
  RowData,
  TableMeta,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./table.module.scss";

interface TableProps<TData, TValue = any> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  getSubRows?: (originalRow: TData, index: number) => undefined | TData[];
  metaData?: TableMeta<TData>;
  autoResetPageIndex?: boolean;
  getRowId?: (
    originalRow: TData,
    index: number,
    parent?: Row<TData> | undefined,
  ) => string;
}
const cn = classNames.bind(styles);

export const Table = <TData extends RowData>({
  columns,
  data,
  getSubRows,
  metaData,
  autoResetPageIndex,
  getRowId,
}: TableProps<TData>) => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    enableRowSelection: true,
    autoResetPageIndex,
    columns,
    data,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSubRows,
    meta: metaData,
    onExpandedChange: setExpanded,
    getRowId,
    state: {
      expanded,
    },
  });

  return (
    <table className={cn('table')}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  colSpan={header.colSpan}
                  key={header.id}
                  style={{ width: header.getSize() }}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.displayName = "Table";
