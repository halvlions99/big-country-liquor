
import { Guid } from 'guid-typescript';

export interface Product {
  ProductId: Guid;
  ProductType: ProductType;
  ProductName: string;
  ProductPrice: number;
  ProductLabel: string;
}

export enum ProductType {
  beer = 'Beer',
  liquor = 'Liquor',
  wine = 'Wine'
}

export interface Norris {
  type: string;
  value: Joke;
}

export interface Joke {
   id: number;
   joke: string;
}
