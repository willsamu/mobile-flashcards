import React, { useRef, useState, useEffect } from 'react';
import DeckSwiper from 'react-native-deck-swiper';
import Animated, { Easing } from 'react-native-reanimated';
import { Button } from 'react-native-elements';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { darkBlue } from 'src/utils';
import Card from './Card.react';

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

const Swiper = ({
  incrementCorrect,
  handleSwipedAll,
  questions,
  setDragTrue,
  setDragFalse,
  handleCardSwipe,
}) => {
  const swiperRef = useRef(null);

  const [opacity] = useState(new Animated.Value(0));
  //   const opacity = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.back(),
      duration: 350,
    }).start();
  });
  const swipeLeft = () => {
    swiperRef.current.swipeLeft();
  };

  const swipeRight = () => {
    swiperRef.current.swipeRight();
  };
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <DeckSwiper
        ref={swiperRef}
        onSwiped={handleCardSwipe}
        onSwipedRight={incrementCorrect}
        cards={questions}
        renderCard={(cardItem) => <Card data={cardItem} />}
        onSwipedAll={handleSwipedAll}
        stackSize={3}
        stackSeparation={15}
        useViewOverflow={Platform.OS === 'ios'}
        marginBottom={100}
        cardVerticalMargin={60}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
        disableTopSwipe
        disableBottomSwipe
        childrenOnTop
        backgroundColor={darkBlue}
        dragStart={setDragTrue}
        dragEnd={setDragFalse}
      />
      <Button
        title="Incorrect"
        containerStyle={[styles.btnContainer, { left: 0 }]}
        buttonStyle={styles.button}
        onPress={() => swipeLeft}
      />
      <Button
        title="Correct"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.button}
        onPress={swipeRight}
      />
    </Animated.View>
  );
};

export default Swiper;
