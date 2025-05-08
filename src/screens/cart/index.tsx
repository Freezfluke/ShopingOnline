import React, {Fragment, useMemo} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {productSelector, toggleCart} from '../../redux/product/product-slice';
import {updateQuantity} from '../../redux/product/product-slice';
import {Product} from '../../redux/product/product-types';
import withRouteWrapper from '../../components/hoc/WrapperComponent';
import {styles} from './style';

const Cart = () => {
  const dispatch = useAppDispatch();
  const {productCart} = useAppSelector(productSelector);

  const handleRemove = (product: Product) => {
    dispatch(toggleCart(product));
  };

  const handleChangeQty = (id: number, type: string) => {
    dispatch(updateQuantity({id, type}));
  };

  const totalPrice = useMemo(() => {
    return productCart.items.reduce((sum, item) => {
      return sum + item.price * (item.quantity ?? 1);
    }, 0);
  }, [productCart.items]);

  const renderItem = ({item}: {item: Product}) => {
    const quantity = item.quantity;

    return (
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price.toLocaleString()} บาท</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={() => handleChangeQty(item.id, 'remove')}
              disabled={(quantity || 0) <= 1}
              style={styles.qtyButton}>
              <Text style={styles.textCounter}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => handleChangeQty(item.id, 'plus')}
              style={styles.qtyButton}>
              <Text style={styles.textCounter}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderHiddenItem = ({item}: {item: Product}) => (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() =>
          Alert.alert('ลบสินค้า', 'คุณแน่ใจหรือไม่ที่จะลบสินค้า?', [
            {text: 'ยกเลิก'},
            {text: 'ลบ', onPress: () => handleRemove(item)},
          ])
        }>
        <Text style={styles.deleteText}>ลบ</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Fragment>
      <SwipeListView
        data={productCart.items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
      />
      {totalPrice > 0 && (
        <View style={styles.totalBar}>
          <Text style={styles.totalText}>
            รวมทั้งหมด: {totalPrice.toLocaleString()} บาท
          </Text>
        </View>
      )}
    </Fragment>
  );
};

export default withRouteWrapper('CartScreen')(Cart);
