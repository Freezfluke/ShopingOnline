import {useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {loadProducts} from '../../../redux/product/product-thunk';
import {Product} from '../../../redux/product/product-types';
import {productSelector, toggleCart, toggleFavorite} from '../../../redux/product/product-slice';

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();
  const {product} = useAppSelector(productSelector);
  const [searchText, setSearchText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(searchText);
    }, 200);

    return () => clearTimeout(handler);
  }, [searchText]);

  const filteredProducts = useMemo(() => {
    const query = debouncedText.toLowerCase();
    return product.items.filter(
      item =>
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query),
    );
  }, [debouncedText, product.items]);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const onFavoritePress = (item: Product) => {
    dispatch(toggleFavorite(item));
  };

  const onCartPress = (item: Product) => {
    dispatch(toggleCart(item));
  };

  return {
    filteredProducts,
    setSearchText,
    searchText,
    items: product.items,
    onFavoritePress,
    onCartPress,
  };
};
