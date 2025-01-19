import { useEffect, useState } from "react";
import { CellContext } from "@tanstack/react-table";
import classNames from "classnames/bind";
import styles from "./automakers-cell.module.scss";
import { Button, BUTTON_SIZE } from "../../../../../components/buttons";
import Arrow from "../../../../../assets/icons/arrow-down.svg";
import { Automakers } from "../../../../types.ts";
import Checkbox from "../../../../../components/checkbox/checkbox.tsx";

const cn = classNames.bind(styles);

export const AutomakersCell = (cell: CellContext<Automakers, unknown>) => {
  const { getValue, row } = cell;
  const initialValue = getValue();

  const [value, setValue] = useState(initialValue as string);

  useEffect(() => {
    setValue(initialValue as string);
  }, [initialValue]);

  const ExpandIcon = () => {
    return (
      <img
        src={Arrow}
        alt="expand-arrow"
        className={cn("expand-icon", {
          "expand-icon--rotate": !row.getIsExpanded(),
        })}
      />
    );
  };

  const subRowCount = row.originalSubRows?.length;

  return (
    <div
      className={cn("automakers-cell")}
      style={{ paddingLeft: `${row.depth * 2}rem` }}
    >
      <Checkbox
          checked={row.getIsSelected()}
          onChange={row.toggleSelected}
          indeterminate={row.getIsSomeSelected()}
          disabled={!row.getCanSelect()}
      />
      {row.getCanExpand() && (
        <Button
          onClick={row.getToggleExpandedHandler()}
          size={BUTTON_SIZE.SMALL}
          icon={<ExpandIcon />}
        />
      )}
      <span style={{ paddingLeft: row.getCanExpand() ? 0 : 48 }}>
        {value}{' '}
        <span style={{fontSize: '10px'}}
        className={cn({
          'automakers-cell__sub-row-count': subRowCount,
        })}>{subRowCount ? `${subRowCount}` : ""}</span>
      </span>
    </div>
  );
};

AutomakersCell.displayName = "AutomakersCell";
