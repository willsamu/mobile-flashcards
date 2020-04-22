import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDeck } from 'src/redux/actions';

import Modal from './DeckModal.react';

const handleMainButton = (editDeck, dispatch, items, setError, value) => {
  if (!editDeck && items.includes(value)) {
    setError(`Deck ${value} exists already!`);
    return null;
  }
  return editDeck
    ? console.log('GOTTA IMPLEMENT UPDATE TO @DeckModal.react.js')
    : addDeck(dispatch, value);
};

const HomeModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showModalHome);
  const editDeck = useSelector((state) => state.ui.editModalHome);
  const items = useSelector((state) => state.data.order);
  const [input, setInput] = useState(editDeck);
  const [error, setError] = useState('');
  const handleButton = () => handleMainButton(editDeck, dispatch, items, setError, input);

  useEffect(() => {
    setInput(editDeck);
  }, [editDeck]);

  return (
    <Modal
      input={input}
      setInput={setInput}
      items={items}
      show={show}
      dispatch={dispatch}
      handleMainButton={handleMainButton}
      error={error}
      setError={setError}
      handleButton={handleButton}
    />
  );
};

export default HomeModal;
