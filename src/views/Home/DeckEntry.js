import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#8B90A0',
  },
});

const DeckCard = ({ name, amountCards, lastPlayed = 'today' }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('Pressed Card', name);
        navigation.navigate('Deck', { title: name });
      }}
    >
      <Text style={styles.h1}>{name}</Text>
      <Text>{amountCards} Cards</Text>
      <Text style={styles.timestamp}>Last Played {lastPlayed}</Text>
    </TouchableOpacity>
  );
};

export default DeckCard;
