import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';

export const styles = StyleSheet.create({
  card: {
    marginVertical: 3.5,
    marginHorizontal: 2,
    width: '49%',
    backgroundColor: '#fff',
    borderRadius: normalize({size: 4}),
    elevation: normalize({size: 2}),
  },
  cartIcon: {
    position: 'absolute',
    top: 5,
    right: 40,
    zIndex: 10,
  },
  cartCount: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
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
