import { Table } from "../../components/table/table.tsx";
import { defaultColumns } from "./components/main-columns.tsx";

import { Automakers, Specification } from "../types.ts";
import { RowData, TableMeta } from "@tanstack/react-table";
import { useDispatch, useSelector } from "react-redux";
import {getActualSpecification, getAutomakersList} from "../../store/automakers/automakers-selectors.ts";
import { useAddSubRow } from "./hooks/use-add-sub-row.ts";
import { useRemoveSubRow } from "./hooks/use-remove-sub-row.ts";
import { SpecificationCard } from "./components/specification-card/specification-card.tsx";
import styles from "./main-page.module.scss";
import classNames from "classnames/bind";
import { automakersSliceActions } from "../../store/automakers/automakers-slice.ts";
import { AppDispatch } from "../../store/store.ts";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    setSpecification: (value: Specification) => void;
    addSubRow: (parentId: string | number, newSubRow: Automakers) => void;
    removeSubRow: (subRowIdToDelete: string, parentId?: string) => void;
  }
}
const cn = classNames.bind(styles);

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getSubRows = (row: Automakers) => row?.subRows;
  const automakersList = useSelector(getAutomakersList);
  const actualSpecification = useSelector(getActualSpecification);
  const { addSubRow } = useAddSubRow(automakersList);
  const { removeSubRow } = useRemoveSubRow(automakersList);

  const metaData = {
    setSpecification: (specification) => {
      dispatch(automakersSliceActions.setActualSpecification(specification));
   },
    addSubRow,
    removeSubRow,
  } as TableMeta<Automakers[]>;

  // Вместо индекса строки, подставляется айди из данных
  const getRowId = (row: Automakers) => row.id;

  return (
    <div className={cn("main-page")}>
      <div className={cn("main-page__table-wrapper")}>
        <Table
          columns={defaultColumns}
          data={automakersList}
          getSubRows={getSubRows}
          metaData={metaData}
          getRowId={getRowId}
        />
      </div>
      <SpecificationCard specification={actualSpecification} />
    </div>
  );
};

MainPage.displayName = "MainPage";
