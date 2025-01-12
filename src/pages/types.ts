export interface Specification {
    /** ID */
  id?: string;
    /** Модель */
  description?: string;
    /** Двигатель */
  engine?: string;
    /** Коробка передач */
  transmission?: string;
    /** Топливо */
  drive?: string;
    /** Комплектация */
  equipment?: string;
    /** Цвет */
  color?: string;
  /** VIN */
  VIN?: string;
  /** Стоимость */
  price?: string;
  /** Ссылка на изображение */
  imgUrl?: string;
}

export interface Automakers {
  car?: Specification;
  id: string;
  automakerName: string;
  subRows?: Automakers[];
}
