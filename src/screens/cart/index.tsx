import {Text, View} from 'react-native';
import withRouteWrapper from '../../components/hoc/WrapperComponent';

function Cart() {
  return <View>
    <Text>Hello</Text>
  </View>;
}

export default withRouteWrapper('CartScreen')(Cart);
