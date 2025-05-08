// Home.tsx
import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import {RouteName} from '../../navigation/constants/route-name';
import withRouteWrapper from '../../components/hoc/WrapperComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MemorizedHeader} from './view/header';
import {MemorizedProductCard} from '../../components/product-card';
import {MemorizedSearchBar} from '../../components/search';
import {useFetchProducts} from './hooks';
import {productSelector} from '../../redux/product/product-slice';
import {useAppSelector} from '../../store/store';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  any,
  typeof RouteName.Home
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({navigation}: Props): React.JSX.Element {
  useFetchProducts();
  const {product} = useAppSelector(productSelector);

  return (
    <Fragment>
      <MemorizedHeader />
      <MemorizedSearchBar value="" onChange={() => {}} />
      <FlatList
        data={product.items}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <MemorizedProductCard
              onPressDetailProduct={() =>
                navigation.push(RouteName.ProductDetail)
              }
              onFavoritePress={() => {}}
              id={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        }}
      />
    </Fragment>
  );
}

export default withRouteWrapper('HomeScreen')(Home);
