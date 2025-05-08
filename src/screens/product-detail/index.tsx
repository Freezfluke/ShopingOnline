import React, {useMemo} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import withRouteWrapper from '../../components/hoc/WrapperComponent';
import {MemorizedHeader} from '../../components/header/header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteName} from '../../navigation/constants/route-name';
import {useDispatch} from 'react-redux';
import {
  toggleFavorite,
  toggleCart,
  productSelector,
} from '../../redux/product/product-slice';
import {RouteProp, useRoute} from '@react-navigation/native';
import {styles} from './style';
import {useAppSelector} from '../../store/store';
import {Product} from '../../redux/product/product-types';
import {useToast} from 'react-native-toast-notifications';

type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  any,
  typeof RouteName.ProductDetail
>;

type ProductDetailRouteProp = RouteProp<
  Record<string, {product: {id: number}}>,
  string
>;

type Props = {
  navigation: ProductDetailScreenNavigationProp;
};

function ProductDetail({navigation}: Props) {
  const toast = useToast();
  const dispatch = useDispatch();
  const {product} = useAppSelector(productSelector);
  const route = useRoute<ProductDetailRouteProp>();
  const {product: productRoute} = route.params;

  const produceDetail: Product = useMemo(() => {
    return (
      product.items.find(e => e.id === productRoute.id) ?? {
        id: 0,
        name: '',
        desc: '',
        image: '',
        price: 0,
        rating: {rate: 0, count: 0},
        isFa: false,
        isCart: false,
      }
    );
  }, [product.items, productRoute]);

  const handleFavorite = () => {
    dispatch(toggleFavorite(produceDetail));
    toast.show('ทำรายการสำเร็จ', {type: 'success', placement: 'top'});
  };

  const handleCart = () => {

    dispatch(toggleCart(produceDetail));
    toast.show('ทำรายการสำเร็จ', {type: 'success', placement: 'top'});
  };

  return (
    <View style={styles.container}>
      <MemorizedHeader
        isFa={produceDetail.isFa}
        title="รายละเอียดสินค้า"
        onBackPress={() => navigation.goBack()}
        onFavoritePress={handleFavorite}
      />

      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{uri: produceDetail.image}} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>{produceDetail.name}</Text>
          <Text style={styles.price}>
            {produceDetail.price.toLocaleString()} บาท
          </Text>
          <Text style={styles.rating}>
            คะแนน: {produceDetail.rating.rate} ({produceDetail.rating.count}{' '}
            รีวิว)
          </Text>
          <Text style={styles.desc}>{produceDetail.desc}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.cartBtn} onPress={handleCart}>
        <Ionicons
          name={produceDetail.isCart ? 'cart' : 'cart-outline'}
          size={22}
          color="#fff"
        />
        <Text style={styles.cartText}>
          {produceDetail.isCart ? 'ลบจากรถเข็น' : 'เพิ่มใส่รถเข็น'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default withRouteWrapper('ProductDetailScreen')(ProductDetail);
