import {StyleSheet} from 'react-native';
import {height, normalize} from '../../function/normalize';
import {Colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: normalize({size: 20}),
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    marginTop: normalize({size: 20}),
    width: null,
    flex: 1,
    height: height * 0.5,
    borderRadius: 12,
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: normalize({size: 20}),
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    color: '#e91e63',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  desc: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  cartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  cartText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
