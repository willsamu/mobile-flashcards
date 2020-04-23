import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import Deck from './Deck.react';

const ConnectedDeck = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { title } = route.params;
  console.log('Title: ', title);

  const navigation = useNavigation();
  const navigate = () => navigation.navigate('Quiz', { title });
  const items = useSelector((state) => state.data[title].questions);
  return <Deck dispatch={dispatch} items={items} title={title} navigate={navigate} />;
};

export default ConnectedDeck;
