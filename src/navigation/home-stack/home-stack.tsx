import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home';
import ProductDetailScreen from '../../screens/product-detail';
import { RouteName } from '../constants/route-name';





const Stack = createNativeStackNavigator();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteName.Home}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name={RouteName.ProductDetail}
        component={ProductDetailScreen}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
