export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  rating: Rating;
  isFa: boolean;
  isCart: boolean;
}
