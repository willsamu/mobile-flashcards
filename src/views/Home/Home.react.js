import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

import { AddQuestion } from 'src/Compoents/Modals';
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
    backgroundColor: '#001427',
    borderRadius: 0,
  },
});

const Home = () => {
  const [show, setModablVisibility] = useState(false);
  const renderData = Object.values(Data);

  return (
    <View style={styles.container}>
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <DeckCard name={item.title} amountCards={item.questions.length} />
        )}
        ListHeaderComponent={() => <View style={styles.headerSeparator} />}
        ListFooterComponent={() => <View style={styles.headerSeparator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.title}
      />

      <Button
        buttonStyle={styles.addDeckBtn}
        title="Add Deck"
        onPress={() => setModablVisibility(true)}
      />
      <AddQuestion show={show} setShow={setModablVisibility} />
    </View>
  );
};

export default Home;
