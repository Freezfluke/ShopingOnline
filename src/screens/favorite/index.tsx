import withRouteWrapper from '../../components/hoc/WrapperComponent';
import {Fragment} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/store';
import {
  productSelector,
  toggleFavorite,
} from '../../redux/product/product-slice';
import {MemorizedProductCard} from '../../components/product-card';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteName} from '../../navigation/constants/route-name';
import {useToast} from 'react-native-toast-notifications';
import {Product} from '../../redux/product/product-types';
import {FlatList} from 'react-native';
import { MemorizedEmptyScreen } from '../../components/empty';

type FavoriteScreenNavigationProp = NativeStackNavigationProp<
  any,
  typeof RouteName.Favorite
>;

type Props = {
  navigation: FavoriteScreenNavigationProp;
};

function Favorite({navigation}: Props) {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const {productFavourite} = useAppSelector(productSelector);

  const onFavoritePress = (item: Product) => {
    dispatch(toggleFavorite(item));
    toast.show('ทำรายการสำเร็จ', {type: 'success', placement: 'top'});
  };

  return (
    <Fragment>
      <FlatList
        data={productFavourite.items}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<MemorizedEmptyScreen />}
        renderItem={({item}) => {
          return (
            <MemorizedProductCard
              onPressDetailProduct={() =>
                navigation.push(RouteName.ProductDetail, {
                  product: {
                    id: item.id,
                  },
                })
              }
              onFavoritePress={() =>
                onFavoritePress({
                  id: item.id,
                  name: item.name,
                  desc: item.desc,
                  image: item.image,
                  price: item.price,
                  rating: item.rating,
                  isCart: item.isCart,
                  isFa: item.isFa,
                })
              }
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              isFa={item.isFa}
            />
          );
        }}
      />
    </Fragment>
  );
}

export default withRouteWrapper('FavoriteScreen')(Favorite);
