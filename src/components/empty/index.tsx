import React, { memo } from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';

type EmptyScreenProps = {
  title?: string;
  subtitle?: string;
  imageSource?: string;
};

const EmptyScreen: React.FC<EmptyScreenProps> = ({
  title = 'ไม่พบข้อมูล',
  imageSource = 'https://cdn-icons-png.flaticon.com/512/4076/4076549.png',
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageSource}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export const MemorizedEmptyScreen = memo(EmptyScreen);
