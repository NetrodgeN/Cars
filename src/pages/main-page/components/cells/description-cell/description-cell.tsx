import { CellContext } from "@tanstack/react-table";
import { Automakers } from "../../../../types.ts";
import classNames from "classnames/bind";
import style from "./description-cell.module.scss";

const EMPTY_CELL = " ";

const cn = classNames.bind(style);
export const DescriptionCell = (cell: CellContext<Automakers, unknown>) => {
  const {
    row: {
      original: { car },
    },
    table,
  } = cell;

  const value = car?.description || EMPTY_CELL;
  const carSpecification = car;
  const isEmpty = value === EMPTY_CELL;

  const showSpecification = () => {
    if (!isEmpty) {
      table.options.meta?.setSpecification(carSpecification);
    }
  };

  return (
    <div
      className={cn({
        'description-cell--active': !isEmpty,
      })}
      onClick={showSpecification}
    >
      {value}
    </div>
  );
};

DescriptionCell.displayName = "Cell";
