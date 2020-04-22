import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { darkBlue } from 'src/utils';
import { SettingsBtn } from 'src/Compoents/';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    borderColor: darkBlue,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,

    shadowColor: darkBlue,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    zIndex: 0,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#8B90A0',
  },
});

const DeckCard = ({ title, amountCards, lastPlayed = 'today' }) => {
  const navigation = useNavigation();
  return (
    <View>
      <SettingsBtn title={title} />

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          console.log('Pressed Card', title);
          navigation.navigate('Deck', { title });
        }}
      >
        <Text style={styles.h1}>{title}</Text>
        <Text>{amountCards} Cards</Text>
        <Text style={styles.timestamp}>Last Played {lastPlayed}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeckCard;
