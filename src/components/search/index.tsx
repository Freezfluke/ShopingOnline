import React, {memo} from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './style';

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export const MemorizedSearchBar = memo(SearchBar);
