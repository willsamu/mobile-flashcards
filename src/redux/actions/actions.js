import {
  MODAL_SET_SHOW_HOME,
  MODAL_SET_SHOW_HOME_EDIT,
  DATA_ADD_DECK,
  DATA_DELETE_DECK,
  DATA_UPDATE_DECK,
  DECKORDER_SET_DATA,
} from 'src/redux/types';

export const toggleShowModalHome = (bool) => ({
  type: MODAL_SET_SHOW_HOME,
  payload: bool,
});

export const setModalHomeEdit = (bool) => ({
  type: MODAL_SET_SHOW_HOME_EDIT,
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
