import {Automakers} from "../../pages/types.ts";

export const db =  [
    {
      "id": "123",
      "automakerName": "VOLKSWAGEN AUTO GROUP (VAG)",
      "car": {
        "id": "1",
        "description": "Volkswagen, Skoda, Seat или Audi"
      },
      "subRows": [
        {
          "id": "666",
          "automakerName": "AUDI",
          "car": {
            "id": "66-1",
            "description": "www.audi.com"
          },
          "subRows": [
            {
              "id": "669",
              "automakerName": "A8",
              car: {
                description: 'Седан',
                id: '669-1',
                engine: 'Мощный',
                transmission: 'Планвая',
                drive: '3.2',
                equipment: ',',
                color: 'красный',
                VIN: '0000',
                price: '1200000',
                imgUrl: 'http://',
              }
            },
            {
              "id": "670",
              "automakerName": "Lamborghini"
            }
          ]
        }
      ]
    },
  {
    id: '124',
    automakerName: "MERCEDES",
    car: {
        id: '620',
        description: 'пупупу',
    },
    subRows: [{
      id: '124-1',
      automakerName: "Пупупупу",
      car: {
        id: '124-1-1',
        description: 'Описание машины'
      }
    }]
  }
] as Automakers[];

