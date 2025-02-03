import { useSelector } from "react-redux";
import { getActualSpecification } from "../../store/automakers/automakers-selectors.ts";

import styles from "./specification-page.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CarPrice, DetailsImgBlock, DetailsListRow } from "./components";

const cn = classNames.bind(styles);

export const SpecificationPage = () => {
  const actualSpecification = useSelector(getActualSpecification);
  const {
    price,
    description,
    imgUrl,
    VIN,
    engine,
    drive,
    color,
    equipment,
    transmission,
  } = actualSpecification;

  const navigate = useNavigate();

  useEffect(() => {
    if (!actualSpecification.id) {
      navigate({
        to: "/automakers",
      });
    }
  }, []);

  return (
    <div className={cn("specification-page")}>
      <div className={cn("specification-page__auto-name-wrapper")}>
        <h1 className={cn("auto-name-wrapper__title")}> {description} </h1>
        <span className={cn("auto-name-wrapper__description")}>{color}</span>
      </div>
      <div className={cn("specification-page__details")}>
        <DetailsImgBlock alt={description} url={imgUrl} />
        <div className={cn("specification-page__details-list")}>
          <div className={cn("details-list")}>
            <DetailsListRow title={"Коробка"} description={transmission} />
            <DetailsListRow title={"ВИН"} description={VIN} />
            <DetailsListRow title={"Комплектация"} description={equipment} />
            <DetailsListRow title={"Двигатель"} description={engine} />
            <DetailsListRow title={"Топливо"} description={drive} />
            <DetailsListRow title={"Цвет"} description={color} />
            <CarPrice price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

SpecificationPage.displayName = "SpecificationPage";
