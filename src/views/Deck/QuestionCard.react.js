import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { darkBlue } from 'src/utils';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    borderColor: darkBlue,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 7,
    paddingHorizontal: 10,

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
  text: {
    fontSize: 15,
  },
  timestamp: {
    color: '#8B90A0',
  },
});

const QuestinCard = ({ question, drag }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        return null; // add edit btn here
      }}
      onLongPress={drag}
    >
      <Text style={styles.text}>{question.question}</Text>
    </TouchableOpacity>
  );
};

export default QuestinCard;
