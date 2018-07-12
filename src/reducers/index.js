import { combineReducers } from 'redux';
import items from './items';
import item from './item';
import cart from './cart';

const reducers = combineReducers({ items, item, cart });

export default reducers;
