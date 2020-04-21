import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Deck = () => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m the Deck screen</Text>
    </View>
  );
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
