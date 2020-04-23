import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEditModalHome } from 'src/redux/actions';
import { useNavigation } from '@react-navigation/native';
import { handleMainButton, handleCancelButton, getTitle } from './homeModal.helper';

import NativeModal from './HomeModal.react';

const HomeModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const show = useSelector((state) => state.ui.showModalHome);
  const editDeck = useSelector((state) => state.ui.editModalHome);
  const items = useSelector((state) => Object.keys(state.data));

  const [input, setInput] = useState(editDeck);
  const [error, setError] = useState('');
  const title = getTitle(editDeck);

  const navigate = () => navigation.navigate('Deck', { title: input });

  const handleButton = () =>
    handleMainButton(editDeck, dispatch, items, setError, input, setInput, navigate);
  const handleSecondaryButton = () => handleCancelButton(editDeck, dispatch, setError, setInput);
  const backDropPress = () => {
    cancelEditModalHome(dispatch);
    setError('');
  };

  useEffect(() => {
    setInput(editDeck);
  }, [editDeck]);

  return (
    <NativeModal
      input={input}
      setInput={setInput}
      show={show}
      handleMainButton={handleMainButton}
      error={error}
      handleButton={handleButton}
      handleSecondaryButton={handleSecondaryButton}
      backDropPress={backDropPress}
      title={title}
    />
  );
};

export default HomeModal;
