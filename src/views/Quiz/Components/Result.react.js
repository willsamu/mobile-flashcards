import React, { useEffect } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { darkBlue } from 'src/utils';
import { useNavigation } from '@react-navigation/native';
import { calculateResults } from '../quiz.helper';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  results: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  btnContainer: {
    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute',
    width: '50%',
  },
  button: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: darkBlue,
  },
});

const Result = ({ restart, n, m }) => {
  const result = calculateResults(n, m);
  const opacity = new Animated.Value(0);
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.back(),
      duration: 350,
    }).start();
  });
  const restartQuiz = () => restart();
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.results, { opacity }]}>{result}% correct</Animated.Text>
      <Button
        title="Restart"
        containerStyle={[styles.btnContainer, { left: 0 }]}
        buttonStyle={styles.button}
        onPress={restartQuiz}
      />
      <Button
        title="Done"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.button}
        onPress={goBack}
      />
    </View>
  );
};

export default Result;
