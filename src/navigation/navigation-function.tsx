import {memo} from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { RouteName } from './constants/route-name';

interface ChangeIconBottomTabProps {
  routeName: string;
  size: number;
  color: string;
  focused: boolean;
}

type IonIconName =
  | 'home'
  | 'home-outline'
  | 'cart'
  | 'cart-outline'
  | 'like'
  | 'heart'
  | 'heart-outline';

export const changeIconBottomTab = ({
  routeName,
  color,
  size,
  focused,
}: ChangeIconBottomTabProps) => {
  let iconName: IonIconName = 'home';
  switch (routeName) {
    case RouteName.Home:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case RouteName.Cart:
      iconName = focused ? 'cart' : 'cart-outline';
      break;
    case RouteName.Favorite:
      iconName = focused ? 'heart' : 'heart-outline';
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export const MemoizedBottomTab = memo(changeIconBottomTab);
