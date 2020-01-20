
export interface Product {
  ProductId: string;
  ProductType: ProductType;
  ProductName: string;
  ProductPrice: number;
}

export enum ProductType {
  Beer = 'Beer',
  Liquor = 'Liquor',
  Wine = 'Wine'
}

export interface Norris {
  type: string;
  value: Joke;
}

export interface Joke {
   id: number;
   joke: string;
}
