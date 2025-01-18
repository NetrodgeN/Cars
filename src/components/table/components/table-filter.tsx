import { Column } from "@tanstack/react-table";
import DebouncedInput from "../../inputs/debounced-input/debounced-input.tsx";

function TableFilter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();

  return (
    <DebouncedInput
      className=""
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? "") as string}
    />
  );
}

export default TableFilter;
