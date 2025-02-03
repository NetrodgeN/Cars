import classNames from "classnames/bind";
import styles from "../../specification-page.module.scss";

const cn = classNames.bind(styles);

export const DetailsImgBlock = ({ url, alt }: { url?: string; alt?: string }) => {
    const source = !url
        ? "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/lightning_mcqueen_on_a_racetrack_in_cars.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
        : url;
    return (
      <div className={cn("specification-page__details-img-wrapper")}>
        <img
          className={cn("specification-page__details-img")}
          src={source}
          alt={alt}
        />
      </div>
    );
};

DetailsImgBlock.displayName = "DetailsImgBlock";
