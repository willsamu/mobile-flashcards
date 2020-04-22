/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import { Button } from 'react-native-elements';

import { darkBlue } from 'src/utils';
import { HomeModal } from 'src/Compoents/Modals';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowModalHome, setDeckOrder } from 'src/redux/actions';
import DeckCard from './DeckEntry';

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
  const items = useSelector((state) => state.data.order);
  const dataState = useSelector((state) => state.data);
  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={items || []}
        renderItem={({ item, drag }) =>
          dataState && dataState[item] ? (
            <DeckCard title={item} amountCards={dataState[item].questions.length} drag={drag} />
          ) : null
        }
        ListHeaderComponent={() => <View style={styles.headerSeparator} />}
        ListFooterComponent={() => <View style={styles.headerSeparator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => dataState[item].id}
        onDragEnd={({ data }) => dispatch(setDeckOrder(data))}
      />

      <Button
        buttonStyle={styles.addDeckBtn}
        title="Add Deck"
        onPress={() => dispatch(toggleShowModalHome(true))}
      />
      <HomeModal />
    </View>
  );
};

export default Home;
