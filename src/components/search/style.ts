import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: normalize({size: 10}),
    paddingHorizontal: normalize({size: 15}),
    paddingVertical: normalize({size: 12}),
    borderRadius: normalize({size: 20}),
    elevation: normalize({size: 3}),
  },
  icon: {
    marginRight: normalize({size: 8}),
  },
  input: {
    flex: 1,
    fontSize: normalize({size: 16}),
    color: '#333',
  },
});
