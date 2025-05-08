import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { loadProducts } from '../../../redux/product/product-thunk';

export const useFetchProducts = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
};