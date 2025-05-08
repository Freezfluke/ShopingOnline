// Home.tsx
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RouteName} from '../../navigation/constants/route-name';
import withRouteWrapper from '../../components/hoc/WrapperComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


type HomeScreenNavigationProp = NativeStackNavigationProp<
  any,
  typeof RouteName.Home
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({navigation}: Props): React.JSX.Element {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate(RouteName.ProductDetail)
        }
      />
    </View>
  );
}

export default withRouteWrapper('HomeScreen')(Home);
