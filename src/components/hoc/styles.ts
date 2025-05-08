import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  flex: {
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    zIndex: 1,
    backgroundColor: Colors.bgColor,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
});
