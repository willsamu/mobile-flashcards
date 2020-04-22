import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home.react';

const ConnectedHome = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => Object.values(state.data).sort((a, b) => a.index - b.index));

  return <Home dispatch={dispatch} items={items} />;
};

export default ConnectedHome;
