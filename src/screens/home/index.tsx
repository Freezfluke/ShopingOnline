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

type HomeScreenNavigationProp = NativeStackNavigationProp<
  any,
  typeof RouteName.Home
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({navigation}: Props): React.JSX.Element {
  const {
    searchText,
    setSearchText,
    filteredProducts,
    items,
    onFavoritePress,
    onCartPress,
  } = useFetchProducts();

  return (
    <Fragment>
      <MemorizedHeader count={items.length} />
      <MemorizedSearchBar value={searchText} onChange={setSearchText} />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
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
              onCartPress={() =>
                onCartPress({
                  id: item.id,
                  name: item.name,
                  desc: item.desc,
                  image: item.image,
                  price: item.price,
                  rating: item.rating,
                  isCart: item.isCart,
                  isFa: item.isFa,
                  quantity: 1,
                })
              }
              id={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              price={item.price}
              rating={item.rating}
              isCart={item.isCart}
              isFa={item.isFa}
            />
          );
        }}
      />
    </Fragment>
  );
}

export default withRouteWrapper('HomeScreen')(Home);
