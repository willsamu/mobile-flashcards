import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

import { darkBlue } from 'src/utils';
import { DeckModal } from 'src/Compoents/Modals';
import { useDispatch } from 'react-redux';
import { toggleShowModalHome } from 'src/redux/actions';
import DeckCard from './DeckEntry';
import Data from '../Data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSeparator: {
    height: 20,
  },
  separator: {
    height: 5,
  },
  addDeckBtn: {
    backgroundColor: darkBlue,
    borderRadius: 0,
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const renderData = Object.values(Data);

  return (
    <View style={styles.container}>
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <DeckCard title={item.title} amountCards={item.questions.length} />
        )}
        ListHeaderComponent={() => <View style={styles.headerSeparator} />}
        ListFooterComponent={() => <View style={styles.headerSeparator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.title}
      />

      <Button
        buttonStyle={styles.addDeckBtn}
        title="Add Deck"
        onPress={() => dispatch(toggleShowModalHome(true))}
      />
      <DeckModal />
    </View>
  );
};

export default Home;
