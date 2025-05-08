import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../main-bottom/main-bottom';
import ProductDetailScreen from '../../screens/product-detail';
import { RouteName } from '../constants/route-name';



const RootStack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}} >
      <RootStack.Screen name={RouteName.BottomStack} component={BottomTabNavigator} />
      <RootStack.Screen
        name={RouteName.ProductDetail}
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
