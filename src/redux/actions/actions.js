import {
  MODAL_SET_SHOW_HOME,
  MODAL_SET_SHOW_HOME_EDIT,
  DATA_ADD_DECK,
  DATA_DELETE_DECK,
  DATA_UPDATE_DECK,
  DECKORDER_SET_DATA,
  MODAL_SET_SHOW_QUESTION_EDIT,
  MODAL_SET_SHOW_QUESTION,
  DATA_ADD_QUESTION,
  DATA_SET_QUESTION_ORDER,
  DECK_SET_LAST_PLAYED,
} from 'src/redux/types';

export const toggleShowModalHome = (bool) => ({
  type: MODAL_SET_SHOW_HOME,
  payload: bool,
});

export const setModalHomeEdit = (bool) => ({
  type: MODAL_SET_SHOW_HOME_EDIT,
  payload: bool,
});

export const toggleShowModalQuestion = (bool) => ({
  type: MODAL_SET_SHOW_QUESTION,
  payload: bool,
});

export const setModalQuestionEdit = (bool) => ({
  type: MODAL_SET_SHOW_QUESTION_EDIT,
  payload: bool,
});

export const addDeckToData = (deck) => ({
  type: DATA_ADD_DECK,
  payload: deck,
});

export const deleteDeckFromData = (title) => ({
  type: DATA_DELETE_DECK,
  payload: title,
});

export const updateDeckinData = (oldTitle, newTitle) => ({
  type: DATA_UPDATE_DECK,
  payload: { oldTitle, newTitle },
});

export const setDeckOrder = (data) => ({
  type: DECKORDER_SET_DATA,
  payload: data,
});

export const addQuestion = (title, question) => ({
  type: DATA_ADD_QUESTION,
  payload: { title, question },
});

export const setQuestionOrder = (data, title) => ({
  type: DATA_SET_QUESTION_ORDER,
  payload: { data, title },
});

export const setDeckLastPlayed = (title, timestamp) => ({
  type: DECK_SET_LAST_PLAYED,
  payload: { title, timestamp },
});
