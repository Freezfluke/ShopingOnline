import {memo} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import {Product} from '../../redux/product/product-types';

function ProductDetail({produceDetail}: {produceDetail: Product}) {
  return (
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
  );
}

export const MemorizedProductDetail = memo(ProductDetail);
