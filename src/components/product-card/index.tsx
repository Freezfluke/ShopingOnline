// components/ProductCard.tsx
import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './style';
import {Colors} from '../../assets/colors';

type ProductCardProps = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  isFa: boolean;
  isCart: boolean;
  rating: {rate: number; count: number};
  onFavoritePress: () => void;
  onPressDetailProduct: () => void;
  onCartPress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  desc,
  image,
  price,
  rating,
  isCart,
  isFa,
  onCartPress,
  onFavoritePress,
  onPressDetailProduct,
}) => {
  return (
    <TouchableOpacity onPress={onPressDetailProduct} style={styles.card}>
      <TouchableOpacity style={styles.cartIcon} onPress={() => onCartPress()}>
        <Ionicons
          name={isCart ? 'cart' : 'cart-outline'}
          size={24}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => onFavoritePress()}>
        <Ionicons
          name={isFa ? 'heart' : 'heart-outline'}
          size={24}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <View style={styles.priceAndRating}>
          <Text style={styles.price}>฿{price.toLocaleString()}</Text>
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
