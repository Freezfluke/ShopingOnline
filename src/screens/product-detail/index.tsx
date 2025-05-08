import {View} from 'react-native';
import withRouteWrapper from '../../components/hoc/WrapperComponent';
import {MemorizedHeader} from '../../components/header/header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteName} from '../../navigation/constants/route-name';

type ProduceDetailScreenNavigationProp = NativeStackNavigationProp<
  any,
  typeof RouteName.ProductDetail
>;

type Props = {
  navigation: ProduceDetailScreenNavigationProp;
};

function ProductDetail({navigation}: Props) {
  return (
    <View>
      <MemorizedHeader
        title="รายละเอียดสินค้า"
        onBackPress={() => navigation.goBack()}
        onFavoritePress={() => console.log('Favorite pressed')}
      />
    </View>
  );
}

export default withRouteWrapper('ProductDetailScreen')(ProductDetail);
