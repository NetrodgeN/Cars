export interface Specification {
  id?: string;
  description?: string;
  engine?: number;
  transmission?: string;
  drive?: string;
  equipment?: string;
  color?: string;
  VIN?: string;
  price?: string;
  imgUrl?: string;
}

export interface Automakers {
  car?: Specification;
  id: string;
  automakerName: string;
  subRows?: Automakers[];
}
