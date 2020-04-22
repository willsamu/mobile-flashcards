import React from 'react';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Store from 'src/redux/store';
import AppNavigator from 'src/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
