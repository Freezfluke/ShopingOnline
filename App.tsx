import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/root-stack';

import { store } from './src/store/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {


  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
