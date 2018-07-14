import { combineReducers } from 'redux';
import items from './items';
import item from './item';
import cart from './cart';

export const getList = () => ({ items, item, cart });

const reducers = combineReducers(getList());

export default reducers;
