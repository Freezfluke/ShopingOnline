import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';

export const styles = StyleSheet.create({
  container: {
    height: normalize({size: 40}),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize({size: 16}),
    backgroundColor: '#fff',
    elevation: normalize({size: 8}),
  },

});
