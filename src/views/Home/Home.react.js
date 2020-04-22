import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

import DraggableFlatList from 'react-native-draggable-flatlist';
import { Button } from 'react-native-elements';

import { darkBlue } from 'src/utils';
import { DeckModal } from 'src/Compoents/Modals';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowModalHome } from 'src/redux/actions';
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
  const items = useSelector((state) => state.dataOrder);
  // const data = useSelector((state) => state.data);
  const [renderData, setRenderData] = useState(items ? Object.values(items) : []);
  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={renderData}
        renderItem={({ item, drag }) => (
          <DeckCard title={item.title} amountCards={item.questions.length} drag={drag} />
        )}
        ListHeaderComponent={() => <View style={styles.headerSeparator} />}
        ListFooterComponent={() => <View style={styles.headerSeparator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.title}
        onDragEnd={({ data }) => setRenderData(data)}
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
