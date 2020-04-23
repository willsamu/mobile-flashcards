/* eslint-disable import/prefer-default-export */
import { toggleShowModalQuestion, addQuestion } from 'src/redux/actions';

export const addQuestionItem = (
  dispatch,
  deckTitle,
  question,
  setQuestionInput,
  setQuestionError,
  answer,
  setAnswerInput,
  setAnswerError,
  items,
) => {
  if (!question) setQuestionError(`Please Enter a Question!`);
  if (!answer) setAnswerError(`Please Enter an Answer!`);
  const exists = items.some((q) => q.question === question);
  if (exists) setQuestionError(`That Question exists already in ${deckTitle}!`);
  if (!question || !answer || exists) return null;

  setQuestionInput('');
  setAnswerInput('');
  setQuestionError('');
  setAnswerError('');
  dispatch(toggleShowModalQuestion(false));

  return dispatch(addQuestion(deckTitle, { question, answer }));
};
