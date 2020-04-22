import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Deck = ({ route }) => {
  const { title } = route.params;
  return (
    <View style={styles.container}>
      <Text>I&apos;m the Deck screen: {title}</Text>
    </View>
  );
};

export default Deck;
