import { Product } from './product-types';
import data from '../../assets/data.json';

export const fetchProducts = async (): Promise<Product[]> => {

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(data as Product[]);
    }, 500);
  });
};