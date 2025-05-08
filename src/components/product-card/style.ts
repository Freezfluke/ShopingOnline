import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    display: 'flex',
    margin: normalize({size: 8}),
    backgroundColor: '#fff',
    borderRadius: normalize({size: 8}),
    elevation: normalize({size: 2}),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: normalize({size: 0.1}),
    shadowRadius: normalize({size: 4}),
  },
  image: {
    width: '100%',
    height: normalize({size: 200}),
    borderTopLeftRadius: normalize({size: 8}),
    borderTopRightRadius: normalize({size: 8}),
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: normalize({size: 8}),
  },
  name: {
    fontSize: normalize({size: 16}),
    fontWeight: 'bold',
    marginBottom: normalize({size: 4}),
  },
  desc: {
    fontSize: normalize({size: 14}),
    color: '#555',
    marginBottom: normalize({size: 8}),
  },
  priceAndRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: normalize({size: 16}),
    fontWeight: 'bold',
    color: '#000',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: normalize({size: 4}),
    fontSize: normalize({size: 12}),
    color: '#555',
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 8,
    zIndex: 10,
  },
});
