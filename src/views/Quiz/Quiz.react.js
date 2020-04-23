import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { darkBlue } from 'src/utils';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import Animated, { Easing } from 'react-native-reanimated';
import { Card, Result } from './Components';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    height: screenHeight * 0.9,
    position: 'relative',
    backgroundColor: darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    flex: 1,
    width: screenWidth,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: screenHeight * 0.8,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  results: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
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

const swipeLeft = ({ current: swiper }) => {
  swiper.swipeLeft();
};

const swipeRight = ({ current: swiper }) => {
  swiper.swipeRight();
};

const Quiz = () => {
  const route = useRoute();
  const { title } = route.params;
  const questions = title ? useSelector((state) => state.data[title].questions) : []; // TODO: FIX TITLE
  const [isDone, setIsDone] = useState(false);

  const [amountCorrect, setAmountCorrect] = useState(0);
  // const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));

  const incrementCorrect = () => setAmountCorrect((oldValue) => oldValue + 1);
  const handleSwipedAll = () => setIsDone(true);
  const restart = () => {
    setIsDone(false);
    setAmountCorrect(0);
    // setOpacity(0);
  };
  // const opacity = new Animated.Value(0);
  useEffect(() => {
    if (!isDone) {
      Animated.timing(opacity, {
        toValue: 1,
        easing: Easing.back(),
        duration: 350,
      }).start();
      opacity.setValue(1); // TODO: Fix
    }
    if (isDone) opacity.setValue(0);
  }, [isDone]);

  const swiperRef = useRef(null);
  return (
    <View style={styles.quizContainer}>
      {!isDone ? (
        <Animated.View style={[styles.container, { opacity }]}>
          <Swiper
            ref={swiperRef}
            onSwipedRight={incrementCorrect}
            cards={questions}
            renderCard={(cardItem) => <Card data={cardItem} />}
            onSwipedAll={handleSwipedAll}
            stackSize={3}
            stackSeparation={15}
            useViewOverflow={Platform.OS === 'ios'}
            marginBottom={130}
            cardVerticalMargin={60}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
            disableTopSwipe
            disableBottomSwipe
            childrenOnTop
            backgroundColor={darkBlue}
          />
          <Button
            title="Incorrect"
            containerStyle={[styles.btnContainer, { left: 0 }]}
            buttonStyle={styles.button}
            onPress={() => swipeLeft(swiperRef)}
          />
          <Button
            title="Correct"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.button}
            onPress={() => swipeRight(swiperRef)}
          />
        </Animated.View>
      ) : (
        <Result result={isDone} restart={restart} n={amountCorrect} m={questions.length} />
      )}
    </View>
  );
};

export default Quiz;
