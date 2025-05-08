import {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../style';

interface HeaderProps {
  count: number;
}

function Header({count}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>{count}</Text>
      <Text style={styles.textEditor}>New Arrivals</Text>
    </View>
  );
}

export const MemorizedHeader = memo(Header);
