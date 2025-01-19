import { useSelector } from "react-redux";
import { getActualSpecification } from "../../store/automakers/automakers-selectors.ts";

import styles from "./specification-page.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
export const SpecificationPage = () => {
  const actualSpecification = useSelector(getActualSpecification);
  console.log("actualSpecification", actualSpecification);
  const price = new Intl.NumberFormat("ru-RU").format(
    Number(actualSpecification.price),
  );
  return (
    <div className={cn("specification-page")}>
      <div className={cn("specification-page__auto-name-wrapper")}>
        <h1 className={cn('auto-name-wrapper__title')}> {actualSpecification.description} </h1>
        <span className={cn('auto-name-wrapper__description')}>{actualSpecification.description}</span>
      </div>
      <div className={cn("specification-page__details")}>
        <div className={cn("specification-page__details-img-wrapper")}>
          <img
            className={cn("specification-page__details-img")}
            src={actualSpecification.imgUrl}
            alt=""
          />
        </div>
        <div className={cn("specification-page__details-list")}>
          <div className={cn("details-list")}>
            <div className={cn("details-list__row")}>
              <div className={cn("details-list__row-left-item")}>Коробка</div>
              <div className={cn("details-list__row-right-item")}>
                {actualSpecification.transmission}
              </div>
            </div>
            <div className={cn("details-list__row")}>
              <div className={cn("details-list__row-left-item")}>
                Комплектация
              </div>
              <div className={cn("details-list__row-right-item")}>
                {actualSpecification.equipment}
              </div>
            </div>
            <div className={cn("details-list__row")}>
              <div className={cn("details-list__row-left-item")}>
                {actualSpecification.transmission}
              </div>
              <div className={cn("details-list__row-right-item")}>
                {actualSpecification.engine}
              </div>
            </div>
            <div className={cn("details-list__row")}>
              <div className={cn("details-list__row-left-item")}>
                {actualSpecification.transmission}
              </div>
              <div className={cn("details-list__row-right-item")}>
                {actualSpecification.drive}
              </div>
            </div>
            <div className={cn("details-list__row")}>
              <div className={cn("details-list__row-left-item")}>Двигатель</div>
              <div className={cn("details-list__row-right-item")}>
                {actualSpecification.engine}
              </div>
            </div>
            <div className={cn("details-list__row")}>
              <div className={cn("details-list__row-left-item")}>Топливо</div>
              <div className={cn("details-list__row-right-item")}>
                {actualSpecification.drive}
              </div>
            </div>
          </div>
          <div className={cn("car-price")}>
            <span className={cn("car-price__title")}>Стоимость</span>
            <span className={cn("car-price__price")}>{actualSpecification.price ? price : ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

SpecificationPage.displayName = "SpecificationPage";
