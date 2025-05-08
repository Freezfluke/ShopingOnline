import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/root-stack';
import {ToastProvider} from 'react-native-toast-notifications';

import {store} from './src/store/store';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ToastProvider>
    </Provider>
  );
};

export default App;
