import {Text, View} from 'react-native';
import withRouteWrapper from '../../components/hoc/WrapperComponent';

function Favorite() {
  return <View>
    <Text>Favorite</Text>
  </View>;
}

export default withRouteWrapper('FavoriteScreen')(Favorite);
