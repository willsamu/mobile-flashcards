import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'src/views/Home';
import Deck from 'src/views/Deck';
import Quiz from 'src/views/Quiz';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Quiz" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default AuthStack;
