import { combineReducers } from 'redux';
import items from './items';
import item from './item';
import search from './search';
import cart from './cart';

const reducers = combineReducers({ items, item, search, cart });

export default reducers;
