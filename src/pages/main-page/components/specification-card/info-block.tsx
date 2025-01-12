import classNames from "classnames/bind";
import style from "./specification-card.module.scss";

const cn = classNames.bind(style);

type InfoBlockProps = {
  description?: string;
  title: string;
};

export const InfoBlock = ({ title, description }: InfoBlockProps) => {
  if (!description) {
    return null;
  }
  return (
    <div className={cn("info-block")}>
      <div className={cn("info-block__title")}>{title}</div>
      <div className={cn("info-block__description")}>{description}</div>
    </div>
  );
};

InfoBlock.displayName = "InfoBlock";
