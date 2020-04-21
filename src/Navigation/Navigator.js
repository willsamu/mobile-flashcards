import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'views/Home';
import Deck from 'views/Deck';
import Quiz from 'views/Quiz';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Deck" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default AuthStack;
