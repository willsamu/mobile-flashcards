import React from 'react';

import FlipCard from 'react-native-flip-card';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Text } from 'react-native-elements';
import { greyBlue } from 'src/utils';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: screenHeight * 0.8,
  },
  face: {
    flex: 1,
    padding: 20,
  },
  back: {
    flex: 1,
    padding: 20,
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    color: greyBlue,
    paddingBottom: 20,
  },
  showAnswer: {
    fontSize: 15,
    color: greyBlue,
    alignSelf: 'center',
    marginTop: 'auto',
    textTransform: 'capitalize',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
const Card = ({ data }) => {
  return (
    <FlipCard
      style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal
      flipVertical={false}
      flip={false}
      clickable
      useNativeDriver
    >
      {/* Face Side */}
      <View style={styles.face}>
        <Text style={styles.headline}>Question:</Text>
        <Text>{data.question}</Text>
        <Text style={styles.showAnswer}> tap card to reveal answer</Text>
      </View>
      {/* Back Side */}
      <View style={styles.back}>
        <Text style={styles.headline}>Answer: </Text>
        <Text>{data.answer}</Text>
      </View>
    </FlipCard>
  );
};

export default Card;
