import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEditModalDeck } from 'src/redux/actions';
import { handleMainButton, handleCancelButton, getTitle } from './questionModal.helper';

import QuestionModal from './QuestionModal.react';

const QuestionModalConnector = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showModalQuestion);
  const editDeck = useSelector((state) => state.ui.editModalQuestion);
  const items = useSelector((state) => Object.keys(state.data));
  const editData = useSelector((state) => state.data[editDeck]);

  const [input, setInput] = useState(editDeck);
  const [error, setError] = useState('');
  const title = getTitle(editDeck);

  const handleButton = () =>
    handleMainButton(editDeck, dispatch, items, setError, input, setInput, editData);
  const handleSecondaryButton = () => handleCancelButton(editDeck, dispatch, setError, setInput);
  const backDropPress = () => {
    cancelEditModalDeck(dispatch);
    setError('');
  };

  useEffect(() => {
    setInput(editDeck);
  }, [editDeck]);

  return (
    <QuestionModal
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

export default QuestionModalConnector;
