import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loadProducts} from './product-thunk';
import {Product} from './product-types';
import {RootState} from '../../store/store';

interface ProductCounter {
  id: number;
  type: string;
}

interface ProductsState {
  loadingCount: number;
  product: {
    items: Product[];
    error: string | null;
  };
  productFavourite: {
    items: Product[];
  };
  productCart: {
    items: Product[];
  };
}

const initialState: ProductsState = {
  loadingCount: 0,
  product: {
    items: [],
    error: null,
  },
  productFavourite: {
    items: [],
  },
  productCart: {
    items: [],
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const productIndex = state.product.items.findIndex(
        item => item.id === action.payload.id,
      );
      const favIndex = state.productFavourite.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (productIndex !== -1) {
        const isAlreadyFav = favIndex !== -1;

        state.product.items[productIndex] = {
          ...state.product.items[productIndex],
          isFa: !isAlreadyFav,
        };

        if (isAlreadyFav) {
          state.productFavourite.items.splice(favIndex, 1);
        } else {
          state.productFavourite.items.push({
            ...action.payload,
            isFa: !isAlreadyFav,
          });
        }
      }
    },
    toggleCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.product.items.findIndex(
        item => item.id === action.payload.id,
      );
      const cartIndex = state.productCart.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (productIndex !== -1) {
        const isAlreadyCart = cartIndex !== -1;

        state.product.items[productIndex] = {
          ...state.product.items[productIndex],
          isCart: !isAlreadyCart,
        };

        if (isAlreadyCart) {
          state.productCart.items.splice(cartIndex, 1);
        } else {
          state.productCart.items.push({
            ...action.payload,
            isCart: !isAlreadyCart,
          });
        }
      }
    },
    updateQuantity: (state, action: PayloadAction<ProductCounter>) => {
      const cartIndex = state.productCart.items.findIndex(
        item => item.id === action.payload.id,
      );
      const counter = state.productCart.items[cartIndex].quantity ?? 0;

      if (cartIndex !== -1) {
        state.productCart.items[cartIndex] = {
          ...state.productCart.items[cartIndex],
          quantity: counter + (action.payload.type === 'plus' ? 1 : -1),
        };
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadProducts.pending, state => {
        state.loadingCount += 1;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.product.items = action.payload;
        state.loadingCount -= 1;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loadingCount -= 1;
        state.product.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const {toggleFavorite, toggleCart, updateQuantity} =
  productsSlice.actions;
export const productSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
