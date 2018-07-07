import ActionTypes from '../constants/ActionTypes';
import { QueryTransformer, sort } from '../helpers/utils';
import item from './item';

let _items = [];
let _allItems = [];

const defaultState = {
  meta: { key: 'price' },
  list: []
};

const items = (state = defaultState, action) => {
  switch(action.type) {

    case ActionTypes.ALL_ITEMS:
    {
      _allItems = [...action.items];

      return state;
    }
    case ActionTypes.APPLY_PRODUCTS_UPDATE:
    {

      _items = action.items.map(i => item({}, { type: ActionTypes.ADD_ITEM, item: i }));

      const { order, key } = state.meta;

      if(order && key) {
        _items = sort(_items, order, key);
      }

      return { ...state, list: _items };
    }
    case ActionTypes.APPLY_SEARCH_CRITERIA:
    {

      const q = action.query.trim();

      const meta = { ...state.meta };

      if(q) {
        const matcher = new QueryTransformer(q);

        let filtered = _allItems.filter(p => p.name.match(matcher));

        meta.query = action.query;

        const { order, key } = state.meta;

        if(order && key) {
          filtered = sort(filtered, order, key);
        }

        return { ...state, meta, list: filtered };
      } else {

        meta.query = '';

        return { ...state, meta, list: _items };
      }
    }
    case ActionTypes.APPLY_SORTING:
    {

      const SORT_TYPES =  { ASC: 'ASC', DESC: 'DESC' };

      const order = SORT_TYPES[action.order];

      const { key } = action;

      if(order && key) {

        const list = sort(state.list, order, key);

        const meta = { ...state.meta, order, key };

        return { ...state, meta, list };

      } else {

        const meta = { ...state.meta, order: '' };

        return { ...state, meta };
      }
    }
    default:
      return state;
  }
};

export default items;
