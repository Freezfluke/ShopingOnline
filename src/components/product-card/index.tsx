// components/ProductCard.tsx
import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './style';
import { Colors } from '../../assets/colors';

export type ProductCardProps = {
  id?: number;
  name?: string;
  desc?: string;
  image?: string;
  price?: number;
  rating: {rate?: number; count?: number};
  onFavoritePress?: () => void;
  onPressDetailProduct: () => void
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  desc,
  image,
  price,
  rating,
  onFavoritePress,
  onPressDetailProduct,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPressDetailProduct} >
      <TouchableOpacity
        style={styles.cartIcon}
        onPress={() => console.log('Cart Icon Clicked')}>
        <Ionicons name="cart-outline" size={24} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
        <Ionicons name="heart-outline" size={24} color={Colors.primary} />
      </TouchableOpacity>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <View style={styles.priceAndRating}>
          <Text style={styles.price}>฿{price}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>
              {rating.rate} ({rating.count})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const MemorizedProductCard = memo(ProductCard);
