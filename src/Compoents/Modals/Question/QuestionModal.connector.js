import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEditModalDeck } from 'src/redux/actions';
import { addQuestionItem } from './questionModal.helper';

import QuestionModal from './QuestionModal.react';

const QuestionModalConnector = ({ deckTitle }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showModalQuestion);

  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [questionError, setQuestionError] = useState('');
  const [answerError, setAnswerError] = useState('');
  const items = useSelector((state) => state.data[deckTitle].questions);

  const handleAddButton = () =>
    addQuestionItem(
      dispatch,
      deckTitle,
      questionInput,
      setQuestionInput,
      setQuestionError,
      answerInput,
      setAnswerInput,
      setAnswerError,
      items,
    );
  const hideModal = () => {
    cancelEditModalDeck(dispatch);
    setQuestionError('');
    setAnswerError('');
    setQuestionInput('');
    setAnswerInput('');
  };

  return (
    <QuestionModal
      questionInput={questionInput}
      setQuestionInput={setQuestionInput}
      questionError={questionError}
      answerInput={answerInput}
      setAnswerInput={setAnswerInput}
      answerError={answerError}
      show={show}
      handleMainButton={handleAddButton}
      hideModal={hideModal}
    />
  );
};

export default QuestionModalConnector;
