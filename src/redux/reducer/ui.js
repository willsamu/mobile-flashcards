import {
  MODAL_SET_SHOW_HOME,
  MODAL_SET_SHOW_HOME_EDIT,
  MODAL_SET_SHOW_QUESTION,
  MODAL_SET_SHOW_QUESTION_EDIT,
} from 'src/redux/types';

const initialState = {
  showModalHome: false,
  editModalHome: null,
  showModalQuestion: false,
  editModalQuestion: null,
  itemToDelete: null,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SET_SHOW_HOME: {
      return { ...state, showModalHome: action.payload };
    }
    case MODAL_SET_SHOW_HOME_EDIT: {
      return { ...state, editModalHome: action.payload };
    }
    case MODAL_SET_SHOW_QUESTION: {
      return { ...state, showModalQuestion: action.payload };
    }
    case MODAL_SET_SHOW_QUESTION_EDIT: {
      return { ...state, editModalQuestion: action.payload };
    }
    default:
      return state;
  }
};

export default ui;
