import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'src/views/Home';
import Deck from 'src/views/Deck';
import Quiz from 'src/views/Quiz';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
      options={() => ({
        // header: ({ scene, previous, navigation }) => {
        //   const { options } = scene.descriptor;
        //   const title =
        //     options.headerTitle !== undefined
        //       ? options.headerTitle
        //       : options.title !== undefined
        //       ? options.title
        //       : scene.route.name;
        //   return (
        //     <MyHeader
        //       title={title}
        //       leftButton={previous ? <MyBackButton onPress={navigation.goBack} /> : undefined}
        //       style={options.headerStyle}
        //     />
        //   );
        // },
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: 'Your Decks',
        })}
      />
      <Stack.Screen
        name="Deck"
        component={Deck}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default AuthStack;
