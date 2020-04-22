import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.react';

const ConnectedHome = ({ route }) => {
  const dispatch = useDispatch();
  console.log('Route', route.params.title);
  const items = useSelector(
    (state) => state.data[route.params.title].questions,
    // .sort((a, b) => a.index - b.index));
  );
  console.log('Items: ', items);
  return <Deck dispatch={dispatch} items={items} route={route} />;
};

export default ConnectedHome;
