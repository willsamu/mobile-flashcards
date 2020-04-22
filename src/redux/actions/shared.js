import { formatCreateDeck } from 'src/utils/helper';
import {
  toggleShowModalHome,
  setModalHomeEdit,
  addDeckToData,
  updateDeckinData,
  toggleShowModalQuestion,
  setModalQuestionEdit,
} from './actions';

export const cancelEditModalHome = (dispatch) => {
  dispatch(toggleShowModalHome(false));
  dispatch(setModalHomeEdit(null));
};
export const cancelEditModalDeck = (dispatch) => {
  dispatch(toggleShowModalQuestion(false));
  dispatch(setModalQuestionEdit(null));
};
/**
 * @description Set Name of Deck to edit
 * @param  {Function} dispatch
 * @param  {String} title
 */
export const editDeck = (dispatch, title) => {
  dispatch(toggleShowModalHome(true));
  dispatch(setModalHomeEdit(title));
};

export const addDeck = (dispatch, title) => {
  const deck = formatCreateDeck(title);
  dispatch(addDeckToData(deck));
  cancelEditModalHome(dispatch);
};

export const updateDeck = (dispatch, oldTitle, newTitle) => {
  dispatch(updateDeckinData(oldTitle, newTitle));
  cancelEditModalHome(dispatch);
};
