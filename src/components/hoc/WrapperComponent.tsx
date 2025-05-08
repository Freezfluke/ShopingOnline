import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './styles';
// import { LoadingComponent } from '../loading';

const withRouteWrapper = <P extends object>(routeName: string) => {
  return (WrappedComponent: any) => {
    const WrapperComponent: React.FC<P> = (props: P) => {
      const [state] = useState({});

      useEffect(() => {
        if (routeName) {
          console.log(routeName);
        }
      }, []);

      return (
        <SafeAreaView style={styles.wrapper}>
          {/* <LoadingComponent /> */}
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <View style={styles.container}>
            <WrappedComponent {...props} {...state} />
          </View>
        </SafeAreaView>
      );
    };

    return WrapperComponent;
  };
};

export default withRouteWrapper;
