import { combineReducers } from 'redux';
import ui from './ui';
import { data, deckOrder } from './data';

export default combineReducers({
  ui,
  data,
  deckOrder,
});
