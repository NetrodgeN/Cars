import classNames from "classnames/bind";
import styles from "../../specification-page.module.scss";
import { TextInput } from "../../../../components/inputs/text-input/text-input.tsx";
import { ChangeEvent } from "react";

const cn = classNames.bind(styles);

interface Props {
  title: string;
  name?: string;
  isEdit?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  description?: string;
}

export const DetailsListRow = ({
  title,
  description,
  name,
  onChange,
  isEdit = false,
}: Props) => {
  if (!description && !isEdit) {
    return;
  }
  return (
    <div className={cn("details-list__row")}>
      <div className={cn("details-list__row-left-item")}>{title}</div>
      <TextInput
        name={name}
        readonly={!onChange}
        onChange={onChange}
        className={cn("details-list__row-right-item")}
        value={description}
      />
    </div>
  );
};
