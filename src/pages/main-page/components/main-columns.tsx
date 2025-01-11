import { createColumnHelper } from "@tanstack/react-table";
import { AutomakersCell } from "./cells/automakers-cell/automakers-cell.tsx";
import { Automakers } from "../../types.ts";
import { DescriptionCell } from "./cells/description-cell/description-cell.tsx";
import { MenuCell } from "./menu-cell.tsx";

const columnHelper = createColumnHelper<Automakers>();

export const defaultColumns = [
  columnHelper.accessor((row) => row.automakerName, {
    header: () => (
      <span style={{ paddingLeft: "58px" }}>Автопроизводитель</span>
    ),
    cell: AutomakersCell,
    footer: (props) => props.column.id,
    id: "name",
    size: 518,
  }),

  columnHelper.accessor((row) => row.car, {
    header: () => <span style={{ paddingLeft: "10px" }}>Описание</span>,
    cell: DescriptionCell,
    footer: (props) => props.column.id,
    id: "Content",
    size: 518,
  }),

  columnHelper.accessor((row) => row.car, {
    header: () => "",
    cell: MenuCell,
    footer: (props) => props.column.id,
    id: "MenuCell",
    size: 50,
  }),
];
