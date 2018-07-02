import ActionTypes from '../constants/ActionTypes';
import { QueryTransformer } from '../utils';
import item from './item';

let allItems = [];

const items = (state = [], action) => {
  console.log(action)
  switch(action.type) {

    case ActionTypes.FETCH_PRODUCTS_RECEIVE:
    case ActionTypes.ALL_PRODUCTS:

      allItems = action.items.map(i => item(i, action));
      return allItems;

    case ActionTypes.APPLY_SEARCH_CRITERIA:

      const q = action.query.trim();

      if(q) {
        const matcher = new QueryTransformer(q);
        return allItems.filter(p => p.name.match(matcher));
      }

      return allItems;

    default:
      return state;
  }
};

export default items;
