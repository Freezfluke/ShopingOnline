import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './style';
import {Colors} from '../../assets/colors';

type Props = {
  title: string;
  onBackPress: () => void;
  onFavoritePress: () => void;
  isFa: boolean;
};

const CustomHeader: React.FC<Props> = ({
  onBackPress,
  onFavoritePress,
  isFa,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="arrow-back" size={30} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onFavoritePress}>
        <Ionicons
          name={isFa ? 'heart' : 'heart-outline'}
          size={30}
          color={Colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export const MemorizedHeader = memo(CustomHeader);
