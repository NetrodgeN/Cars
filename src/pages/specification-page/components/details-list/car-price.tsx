import classNames from "classnames/bind";
import styles from "../../specification-page.module.scss";

const cn = classNames.bind(styles);

export const CarPrice = ({ price }: { price?: string }) => {
  const carPrice = new Intl.NumberFormat("ru-RU").format(Number(price));

  return price && (
    <div className={cn("car-price")}>
      <span className={cn("car-price__title")}>Стоимость</span>
      <span className={cn("car-price__price")}>{carPrice}</span>
    </div>
  );
};

CarPrice.displayName = "CarPrice";
