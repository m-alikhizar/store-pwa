import { combineReducers } from 'redux';
import items from './items';
import search from './search';

const reducers = combineReducers({
  items,
  search
});

export default reducers;
