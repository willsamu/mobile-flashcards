import { createStore } from 'redux';
import rootReducer from 'src/redux/reducer';

const store = createStore(rootReducer);

export default store;
