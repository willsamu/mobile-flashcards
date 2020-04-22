import Data from 'src/utils/Data';

import update from 'immutability-helper';
import { DATA_ADD_DECK, DECKORDER_SET_DATA } from 'src/redux/types';

const data = (state = { order: Object.keys(Data).sort(), ...Data }, action) => {
  switch (action.type) {
    case DATA_ADD_DECK: {
      console.log('Adding Deck ', action.payload);
      const newState = update(state, {
        $merge: action.payload,
        order: { $unshift: [Object.values(action.payload)[0].title] },
      });
      return newState;
    }
    case DECKORDER_SET_DATA: {
      const newState = update(state, {
        order: {
          $set: [...action.payload],
        },
      });
      console.log('NewState: ', newState);
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
