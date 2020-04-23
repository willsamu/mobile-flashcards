import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from 'src/redux/store';
import AppNavigator from 'src/Navigation';
import { setLocalNotification } from 'src/utils/Notifications';

const App = () => {
  useEffect(() => {
    setLocalNotification();
  });
  // eslint-disable-next-line no-console
  console.disableYellowBox = ['componentWIllReceiveProps']; // Used by some Libraries
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
