import style from "./specification-card.module.scss";
import classNames from "classnames/bind";
import { Specification } from "../../../types.ts";
import {InfoBlock} from "./info-block.tsx";
import {SpecificationCardBottomButtons} from "./specification-card-bottom-buttons.tsx";

const cn = classNames.bind(style);

export const SpecificationCard = ({
  specification,
}: {
  specification?: Specification;
}) => {

  if (!specification) {
    return (
      <div className={cn("specification-card")}>
        <h1>Выберите автомобиль</h1>
      </div>
    );
  }
    const {
        description,
        color,
        drive,
        engine,
        VIN,
        imgUrl,
        price,
        equipment,
        transmission,
    } = specification;
  return (
      <div className={cn("specification-card")}>
          <h1>Технические характеристики</h1>
          <InfoBlock title={'Наименование автомобиля'} description={description} />
          <InfoBlock title={'Цвет'} description={color} />
          <InfoBlock title={'Драйв?'} description={drive} />
          <InfoBlock title={'Двигатель'} description={engine} />
          <InfoBlock title={'VIN'} description={VIN} />
          <InfoBlock title={'Картинка тут другая карточка'} description={imgUrl} />
          <InfoBlock title={'Стоимость'} description={price} />
          <InfoBlock title={'Комплектация'} description={equipment} />
          <InfoBlock title={'Коробка'} description={transmission} />
          <SpecificationCardBottomButtons />
      </div>
  );
};

SpecificationCard.displayName = "SpecificationCard";
