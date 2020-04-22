import { combineReducers } from 'redux';
import ui from './ui';
import { data, dataOrder } from './data';

export default combineReducers({
  ui,
  data,
  dataOrder,
});
