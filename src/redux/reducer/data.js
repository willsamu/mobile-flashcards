import Data from 'src/utils/Data';

import update from 'immutability-helper';
import {
  DATA_ADD_DECK,
  DECKORDER_SET_DATA,
  DATA_DELETE_DECK,
  DATA_UPDATE_DECK,
  DATA_ADD_QUESTION,
  DATA_SET_QUESTION_ORDER,
  DECK_SET_LAST_PLAYED,
} from 'src/redux/types';

const data = (state = { ...Data }, action) => {
  switch (action.type) {
    case DATA_ADD_DECK: {
      const newState = update(state, {
        $merge: action.payload,
      });
      return newState;
    }
    case DATA_DELETE_DECK: {
      const newState = update(state, {
        $unset: [action.payload],
      });
      return newState;
    }
    case DATA_UPDATE_DECK: {
      const { oldTitle, newTitle } = action.payload;
      const newState = { ...state, [newTitle]: { ...state[oldTitle], title: newTitle } };
      delete newState[oldTitle];
      return newState;
    }
    case DECKORDER_SET_DATA: {
      const newState = { ...state };
      action.payload.forEach((element, index) => {
        newState[element.title].index = index;
      });
      return newState;
    }
    case DATA_ADD_QUESTION: {
      const { title, question } = action.payload;
      const newState = update(state, {
        [title]: { questions: { $unshift: [{ ...question }] } },
      });
      return newState;
    }
    case DATA_SET_QUESTION_ORDER: {
      // eslint-disable-next-line no-shadow
      const { data, title } = action.payload;
      const newState = update(state, { [title]: { questions: { $set: data } } });
      return newState;
    }
    case DECK_SET_LAST_PLAYED: {
      const { title, timestamp } = action.payload;
      const newState = update(state, {
        [title]: { timestamp: { $set: timestamp } },
      });
      return newState;
    }
    default:
      return state;
  }
};

export default data;
