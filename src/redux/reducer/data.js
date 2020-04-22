import Data from 'src/utils/Data';

import update from 'immutability-helper';
import {
  DATA_ADD_DECK,
  DECKORDER_SET_DATA,
  DATA_DELETE_DECK,
  DATA_UPDATE_DECK,
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
    default:
      return state;
  }
};

const deckOrder = (state = Object.keys(Data), action) => {
  switch (action.type) {
    case DECKORDER_SET_DATA: {
      return update(state, {
        order: {
          $set: [action.payload],
        },
      });
    }
    default:
      return state;
  }
};

export { data, deckOrder };
