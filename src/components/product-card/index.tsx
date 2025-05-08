// components/ProductCard.tsx
import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './style';

type ProductCardProps = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  rating: {rate: number; count: number};
  onFavoritePress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  desc,
  image,
  price,
  rating,
  onFavoritePress,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
        <Ionicons name="heart-outline" size={24} />
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
    </View>
  );
};

export const MemorizedProductCard = memo(ProductCard);
