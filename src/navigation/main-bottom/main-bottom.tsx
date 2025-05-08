import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MemoizedBottomTab} from '../navigation-function';
import {Colors} from '../../assets/colors';
import { styles } from './styles';
import CartScreen from '../../screens/cart';
import FavoriteScreen from '../../screens/favorite';
import { RouteName } from '../constants/route-name';
import Home from '../../screens/home';


const Tab = createBottomTabNavigator();

const createTabBarIcon =
  (routeName: string) =>
  ({focused}: {focused: boolean; color: string; size: number}) =>
    (
      <MemoizedBottomTab
        focused={focused}
        color={Colors.primary}
        size={30}
        routeName={routeName}
      />
    );

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: createTabBarIcon(route.name),
        tabBarStyle: styles.tabbar,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: {display: 'none'},
        tabBarItemStyle: {
        marginVertical:10
        },
      })}>
      <Tab.Screen name={RouteName.Home} component={Home} />
      <Tab.Screen name={RouteName.Cart} component={CartScreen} />
      <Tab.Screen name={RouteName.Favorite} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
