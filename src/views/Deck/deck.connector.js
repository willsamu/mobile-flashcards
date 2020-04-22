import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.react';

const ConnectedDeck = ({ route }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data[route.params.title].questions);
  return <Deck dispatch={dispatch} items={items} route={route} />;
};

export default ConnectedDeck;
