import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './style';

type Props = {
  title: string;
  onBackPress: () => void;
  onFavoritePress: () => void;
};

const CustomHeader: React.FC<Props> = ({onBackPress, onFavoritePress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onFavoritePress}>
        <Ionicons name="heart-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export const MemorizedHeader = memo(CustomHeader);
