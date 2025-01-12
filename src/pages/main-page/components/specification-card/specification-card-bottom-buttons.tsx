import { Button, BUTTON_SIZE } from "../../../../components/buttons";
import classNames from "classnames/bind";

import styles from "./specification-card-bottom-buttons.module.scss";

const cn = classNames.bind(styles);

export const SpecificationCardBottomButtons = () => {
  return (
    <div className={cn("specification-card-bottom-buttons")}>
      <Button label={"Редактировать"} primary size={BUTTON_SIZE.SMALL} />
      <Button label={"Подробнее"} primary size={BUTTON_SIZE.SMALL} />
    </div>
  );
};

SpecificationCardBottomButtons.displayName = "SpecificationCardBottomButtons";
