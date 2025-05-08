import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: normalize({size: 200}),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize({size: 16}),
    elevation: normalize({size: 8}),

  },
  textNumber: {
    fontSize: normalize({size: 60}),
    marginRight: normalize({size: 10})
  },
  textEditor: {
    fontSize: normalize({size: 40})
  }
});
