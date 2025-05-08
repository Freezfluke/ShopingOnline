import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './product-types';
import {fetchProducts} from './product-api';

export const loadProducts = createAsyncThunk<Product[]>(
  'products/loadProducts',
  async () => {
    const data = await fetchProducts();
    return data;
  },
);
