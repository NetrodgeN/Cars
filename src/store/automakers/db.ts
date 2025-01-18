import { Automakers } from "../../pages/types.ts";

export const db = [
  {
    id: '122',
    automakerName: 'АБВ',
    car: {
      id: '122-1',
      description: 'Описание'
    }
  },
  {
    id: "123",
    automakerName: "Volkswagen auto group",
    subRows: [
      {
        id: "666",
        automakerName: "Audi",
        subRows: [
          {
            id: "669",
            automakerName: "A8",
            car: {
              id: "669-1",
              description: "Long 60 TFSI, 2024",
              engine: "4.0 л / 460 л.с.",
              transmission: "Автоматическая",
              drive: "Бензин",
              equipment: "Базовая",
              color: "красный",
              VIN: "0000",
              price: "1200000",
              imgUrl: "http://",
            },
          },
          {
            id: "670",
            automakerName: "Lamborghini",
          },
        ],
      },
    ],
  },
  {
    id: "124",
    automakerName: "Mercedes",
    subRows: [
      {
        id: "124-1",
        automakerName: "Пупупупу",
      },
    ],
  },
  {
    id: '5489',
    automakerName: 'Nissan'
  },
  {
    id: '5490',
    automakerName: 'Peugeot'
  },
  {
    id: '5491',
    automakerName: 'Porsche'
  },
  {
    id: '5492',
    automakerName: 'Renault'
  },
  {
    id: '5493',
    automakerName: 'Subaru'
  },
  {
    id: '5494',
    automakerName: 'Suzuki'
  },
  {
    id: '5495',
    automakerName: 'Volvo'
  } ,
  {
    id: '5496',
    automakerName: 'Yamaha'
  } ,
  {
    id: '5497',
    automakerName: 'GMC'
  } ,
  {
    id: '5498',
    automakerName: 'Harley Davidson'
  } ,
  {
    id: '5499',
    automakerName: 'Infiniti'
  }
] as Automakers[];
