import React, { useRef, useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { darkBlue } from 'src/utils';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
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
  btnCorrect: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: darkBlue,
  },
});

const onSwiped = (type) => {
  console.log(`on swiped ${type}`);
};

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
  const [swipedAll, setSwipedAll] = useState(false);
  const swiperRef = useRef(null);
  //! Todo: add onSwipedAllCards Animation
  return (
    <View style={styles.quizContainer}>
      {!swipedAll ? (
        <View style={styles.container}>
          <Swiper
            ref={swiperRef}
            onSwiped={() => onSwiped('general')}
            onSwipedLeft={() => onSwiped('left')}
            onSwipedRight={() => onSwiped('right')}
            onSwipedTop={() => onSwiped('top')}
            onSwipedBottom={() => onSwiped('bottom')}
            cards={questions}
            renderCard={(cardItem) => <Card data={cardItem} />}
            onSwipedAll={() => setSwipedAll(true)}
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
            buttonStyle={styles.btnCorrect}
            onPress={() => swipeLeft(swiperRef)}
          />
          <Button
            title="Correct"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnCorrect}
            onPress={() => swipeRight(swiperRef)}
          />
        </View>
      ) : (
        <Text style={styles.results}>n/m correct</Text>
      )}
    </View>
  );
};

export default Quiz;
