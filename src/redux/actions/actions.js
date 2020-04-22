import { MODAL_SET_SHOW_HOME, MODAL_SET_SHOW_HOME_EDIT } from 'src/redux/types';

export const toggleShowModalHome = (bool) => ({
  type: MODAL_SET_SHOW_HOME,
  payload: bool,
});

export const setModalHomeEdit = (bool) => ({
  type: MODAL_SET_SHOW_HOME_EDIT,
  payload: bool,
});
