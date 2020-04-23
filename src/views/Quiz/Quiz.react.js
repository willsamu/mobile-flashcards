import React, { useState } from 'react';
// import Swiper from 'react-native-deck-swiper';
import { StyleSheet, View, Text } from 'react-native';
import { darkBlue, greyBlue } from 'src/utils';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Swiper, Result } from './Components';

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  cardCounterText: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    fontSize: 15,
    color: greyBlue,
    textTransform: 'uppercase',
  },
});

const Quiz = () => {
  const route = useRoute();
  const { title } = route.params;
  const questions = title ? useSelector((state) => state.data[title].questions) : []; // TODO: FIX TITLE
  const [isDone, setIsDone] = useState(false);
  const [amountCorrect, setAmountCorrect] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const setDragTrue = () => setIsDragging(true);
  const setDragFalse = () => setIsDragging(false);

  const handleCardSwipe = () => setCurrentCard((oldValue) => oldValue + 1);
  const incrementCorrect = () => setAmountCorrect((oldValue) => oldValue + 1);
  const handleSwipedAll = () => setIsDone(true);
  const restart = () => {
    setIsDone(false);
    setAmountCorrect(0);
    setCurrentCard(0);
  };
  const cardsLeft = questions.length - currentCard;

  return (
    <View style={styles.quizContainer}>
      {!isDone ? (
        <View style={styles.container}>
          <Text style={[styles.cardCounterText, { opacity: isDragging ? 0 : 1 }]}>
            {`${cardsLeft} more Card${cardsLeft !== 1 ? 's' : ''} available`}
          </Text>
          <Swiper
            incrementCorrect={incrementCorrect}
            handleSwipedAll={handleSwipedAll}
            questions={questions}
            setDragTrue={setDragTrue}
            setDragFalse={setDragFalse}
            handleCardSwipe={handleCardSwipe}
          />
        </View>
      ) : (
        <Result result={isDone} restart={restart} n={amountCorrect} m={questions.length} />
      )}
    </View>
  );
};

export default Quiz;
