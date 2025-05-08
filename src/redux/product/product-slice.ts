import {createSlice} from '@reduxjs/toolkit';
import {loadProducts} from './product-thunk';
import {Product} from './product-types';
import {RootState} from '../../store/store';

interface ProductsState {
  loadingCount: number
  product: {
    items: Product[];
    error: string | null;
  };
}

const initialState: ProductsState = {
  loadingCount: 0,
  product: {
    items: [],
    error: null,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadProducts.pending, state => {
        state.loadingCount += 1;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.product.items = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loadingCount -= 1;
        state.product.error = action.error.message ?? 'Unknown error';
      });
  },
});
export const productSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
