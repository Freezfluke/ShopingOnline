import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './styles';
import {useAppSelector} from '../../store/store';
import {productSelector} from '../../redux/product/product-slice';

const withRouteWrapper = <P extends object>(routeName: string) => {
  return (WrappedComponent: any) => {
    const WrapperComponent: React.FC<P> = (props: P) => {
      const {loadingCount} = useAppSelector(productSelector);
      const [state] = useState({});

      useEffect(() => {
        if (routeName) {
        }
      }, [loadingCount]);

      return (
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <View style={styles.container}>
            {loadingCount > 1 ? (
              <ActivityIndicator size="large" />
            ) : (
              <WrappedComponent {...props} {...state} />
            )}
          </View>
        </SafeAreaView>
      );
    };

    return WrapperComponent;
  };
};

export default withRouteWrapper;
