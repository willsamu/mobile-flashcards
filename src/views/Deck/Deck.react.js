import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { darkBlue, greyBlue } from 'src/utils';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Button } from 'react-native-elements';
import { QuestionModal } from 'src/Compoents/Modals';
import { toggleShowModalQuestion, setQuestionOrder } from 'src/redux/actions';
import QuestionCard from './QuestionCard.react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSeparator: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 5,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  amountCards: {
    fontSize: 15,
    color: greyBlue,
    textTransform: 'uppercase',
  },
  btn: {
    flex: 1,
  },
  addQuestionBtn: {
    backgroundColor: '#182C3D',
    borderRadius: 0,
    height: 50,
  },
  startQuizBtn: {
    backgroundColor: darkBlue,
    borderRadius: 0,
    height: 50,
  },
});

const Deck = ({ title, dispatch, items, navigate }) => {
  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={items || []}
        renderItem={({ item, drag }) => <QuestionCard question={item} drag={drag} />}
        ListHeaderComponent={() => (
          <View style={styles.headerSeparator}>
            <Text style={styles.amountCards}>
              {`${items.length} Card${items.length !== 1 ? 's' : ''} available`}{' '}
            </Text>
          </View>
        )}
        ListFooterComponent={() => <View style={styles.headerSeparator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.question}
        onDragEnd={({ data }) => dispatch(setQuestionOrder(data, title))}
      />
      <View style={styles.btnContainer}>
        <Button
          containerStyle={styles.btn}
          buttonStyle={styles.addQuestionBtn}
          title="Add Question"
          onPress={() => dispatch(toggleShowModalQuestion(true))}
        />
        <Button
          containerStyle={styles.btn}
          buttonStyle={styles.startQuizBtn}
          title="Start Quiz"
          onPress={() => navigate()}
        />
      </View>

      <QuestionModal deckTitle={title} />
    </View>
  );
};

export default Deck;
