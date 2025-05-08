import {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../style';

function Header() {
  return (

    <View style={styles.container}>
      <Text style={styles.textNumber}>20</Text>
      <Text style={styles.textEditor}>New Arrivals</Text>
    </View>
  );
}

export const MemorizedHeader = memo(Header);
