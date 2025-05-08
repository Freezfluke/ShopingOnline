import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';
import {Colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  tabbar: {
    height: normalize({size: 60}),
    backgroundColor: Colors.white,
    marginBottom: normalize({size: 20}),
    borderRadius: normalize({size: 50}),
    width: '95%',
  },
});
