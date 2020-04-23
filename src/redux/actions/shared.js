import { formatCreateDeck } from 'src/utils/helper';
import { clearLocalNotification, setLocalNotification } from 'src/utils/Notifications';
import {
  toggleShowModalHome,
  setModalHomeEdit,
  addDeckToData,
  updateDeckinData,
  toggleShowModalQuestion,
  setModalQuestionEdit,
  setDeckLastPlayed,
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

export const addDeck = (dispatch, title, navigate) => {
  const deck = formatCreateDeck(title);
  dispatch(addDeckToData(deck));
  cancelEditModalHome(dispatch);
  navigate();
};

export const updateDeck = (dispatch, oldTitle, newTitle) => {
  dispatch(updateDeckinData(oldTitle, newTitle));
  cancelEditModalHome(dispatch);
};

export const setTimeStamp = (dispatch, title) => {
  clearLocalNotification();
  setLocalNotification();
  dispatch(setDeckLastPlayed(title, new Date(Date.now())));
};
