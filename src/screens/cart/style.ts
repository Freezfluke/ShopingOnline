import {StyleSheet} from 'react-native';
import {normalize} from '../../function/normalize';
import {Colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 3,
    elevation: 2,
    padding: normalize({size: 10}),
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  details: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyButton: {
    marginHorizontal: normalize({size: 1}),
    padding: normalize({size: 10}),
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '90%',
    marginVertical: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalBar: {
    borderRadius: normalize({size: 20}),
    backgroundColor: Colors.white,
    padding: normalize({size: 16}),
    marginHorizontal: normalize({size: 10}),
    marginVertical: normalize({size: 5}),
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textCounter: {
    fontSize: 18,
  },
});
