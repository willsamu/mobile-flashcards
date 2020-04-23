import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import Deck from './Deck.react';

const ConnectedDeck = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const items = useSelector((state) => state.data[route.params.title].questions);
  return <Deck dispatch={dispatch} items={items} route={route} />;
};

export default ConnectedDeck;
