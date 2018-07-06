import { combineReducers } from 'redux';
import items from './items';
import search from './search';
import { cart } from './cart';

const reducers = combineReducers({
  items,
  search,
  cart
});

export default reducers;
