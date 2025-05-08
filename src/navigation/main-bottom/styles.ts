import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';
import {Colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  tabbar: {
    height: normalize({size: 70}),
    paddingBottom: normalize({size: 10}),
    paddingTop: normalize({size: 5}),
    backgroundColor: Colors.white,
    position: 'absolute',
    marginHorizontal: normalize({size: 16}),
    marginBottom: normalize({size: 10}),
    width: '90%',
    alignSelf: 'center',
  },
});
