import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEditModal } from 'src/redux/actions';
import { handleMainButton, handleCancelButton, getTitle } from './homeModal.helper';

import NativeModal from './Modal.react';

const HomeModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showModalHome);
  const editDeck = useSelector((state) => state.ui.editModalHome);
  const items = useSelector((state) => state.data.order);

  const [input, setInput] = useState(editDeck);
  const [error, setError] = useState('');
  const title = getTitle(editDeck);

  const handleButton = () => handleMainButton(editDeck, dispatch, items, setError, input, setInput);
  const handleSecondaryButton = () => handleCancelButton(editDeck, dispatch, setError);
  const backDropPress = () => {
    cancelEditModal(dispatch);
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
