import { Button, BUTTON_SIZE } from "../../../../components/buttons";
import classNames from "classnames/bind";

import styles from "./specification-card-bottom-buttons.module.scss";
import { useNavigate } from "@tanstack/react-router";

const cn = classNames.bind(styles);

export const SpecificationCardBottomButtons = ({
  carId,
}: {
  carId: string;
}) => {
  const navigate = useNavigate({ from: "/automakers" });

  const openEditPageHandler = () => {
    navigate({ to: "/automakers/$carId", params: { carId } });
  };
  const openDetailPageHandler = () => {};

  return (
    <div className={cn("specification-card-bottom-buttons")}>
      <Button
        label={"Редактировать"}
        primary
        size={BUTTON_SIZE.SMALL}
        onClick={openEditPageHandler}
      />

      <Button
        label={"Подробнее"}
        primary
        size={BUTTON_SIZE.SMALL}
        onClick={openDetailPageHandler}
      />
    </div>
  );
};

SpecificationCardBottomButtons.displayName = "SpecificationCardBottomButtons";
