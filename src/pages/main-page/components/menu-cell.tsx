import { CellContext } from "@tanstack/react-table";
import { useModal } from "../../../hooks/use-modal.ts";
import { Automakers } from "../../types.ts";
import { Dropdown } from "../../../components/popups/dropdown/dropdown.tsx";
import plusIcon from "../../../assets/icons/plus-icon.svg";
import {
  AddAutomakerModal,
  AutomakerFieldsType,
} from "./add-automaker-modal/add-automaker-modal.tsx";

export const MenuCell = (cell: CellContext<Automakers, unknown>) => {
  const { row, table } = cell;
  const { openModal } = useModal();

  const createRowHandler = async (props: AutomakerFieldsType) => {
    const newSubRow: Automakers = {
      id: `${row.id}-${Date.now()}`,
      automakerName: props.automakerName,
      car: props.description
        ? {
            id: `${row.id}-${Date.now()}`,
            description: props.description,
          }
        : {},
    };

    table.options.meta?.addSubRow(row.id, newSubRow);
  };
  const openCreateRowModal = () => {
    openModal(<AddAutomakerModal onSubmit={createRowHandler} />, {
      modalSize: "500",
    });
  };

  const deleteRowHandler = () => {
      table.resetRowSelection();
      table.options.meta?.removeRow(row.id, row.parentId);
  };

  return (
    <Dropdown
      direction="bottom left"
      items={[
        {
          content: "Создать",
          onClick: openCreateRowModal,
        },
        {
          content: "Удалить",
          onClick: deleteRowHandler,
        },
      ]}
      trigger={<img src={plusIcon} alt="plus-icon" />}
    />
  );
};
