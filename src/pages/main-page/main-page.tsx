import { useState } from "react";
import { Table } from "../../components/table/table.tsx";
import { defaultColumns } from "./components/main-columns.tsx";

import { Automakers, Specification } from "../types.ts";
import { RowData, TableMeta } from "@tanstack/react-table";
import { useSelector } from "react-redux";
import { getAutomakersList } from "../../store/automakers/automakers-selectors.ts";
import {useAddSubRow} from "./hooks/use-add-sub-row.ts";
import {useRemoveSubRow} from "./hooks/use-remove-sub-row.ts";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    setSpecification: (value: Specification | undefined) => void;
    addSubRow: (parentId: string | number, newSubRow: Automakers) => void;
    removeSubRow: (subRowIdToDelete: string, parentId?: string) => void;
  }
}

export const MainPage = () => {
  const [actualSpecification, setActualSpecification] = useState<Specification>();

  const getSubRows = (row: Automakers) => row?.subRows;
  const automakersList = useSelector(getAutomakersList);
  const {addSubRow} = useAddSubRow(automakersList)
  const {removeSubRow} = useRemoveSubRow(automakersList)
  const metaData = {
    setSpecification: (specification) => {
      setActualSpecification(specification);
    },
    addSubRow,
    removeSubRow,
  } as TableMeta<Automakers[]>;

  // Вместо индекса строки, подставляется айди из данных
  const getRowId = (row: Automakers) => row.id;

  return (
    <div>
      <Table
        columns={defaultColumns}
        data={automakersList}
        getSubRows={getSubRows}
        metaData={metaData}
        getRowId={getRowId}
      />
      <div>{actualSpecification ? actualSpecification.description : ""}</div>
    </div>
  );
};

MainPage.displayName = "MainPage";
