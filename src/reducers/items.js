import ActionTypes from '../constants/ActionTypes';
import { QueryTransformer } from '../helpers/utils';
import item from './item';

let _items = [];
let _allItems = [];

const items = (state = [], action) => {
  switch(action.type) {

    case ActionTypes.ALL_PRODUCTS_DATA:
      _allItems = [...action.items];

      return state;

    case ActionTypes.APPLY_PRODUCTS_UPDATE:

      _items = action.items.map(i => item(i, action));

      return _items;

    case ActionTypes.APPLY_SEARCH_CRITERIA:

      const q = action.query.trim();

      if(q) {
        const matcher = new QueryTransformer(q);
        return _allItems.filter(p => p.name.match(matcher));
      } else {
        return _items;
      }

    default:
      return state;
  }
};

export default items;
