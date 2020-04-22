import { formatCreateDeck } from 'src/utils/helper';
import { toggleShowModalHome, setModalHomeEdit, addDeckToData } from './actions';

export const cancelEditModal = (dispatch) => {
  dispatch(toggleShowModalHome(false));
  dispatch(setModalHomeEdit(null));
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
  cancelEditModal(dispatch);
};
