import ActionTypes from '../constants/ActionTypes';
import item from './item';

const defaultState = {
  meta: { key: 'price' },
  list: []
};

const items = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INITIAL_ITEMS_REQUEST:
    case ActionTypes.GET_ITEMS_REQUEST: {
      const { meta } = state;

      meta.loading = true;
      meta.error = false;

      return { ...state, meta };
    }

    case ActionTypes.GET_ITEMS_ERROR: {
      const { meta } = state;

      meta.loading = false;
      meta.error = true;

      return { ...state, meta };
    }

    case ActionTypes.GET_ITEMS_RECEIVE: {
      const newItems = action.items.map(i => item({}, { type: ActionTypes.GET_ITEM_RECEIVE, item: i }));

      const { list } = state;

      const { meta } = state;

      meta.loading = false;
      meta.error = false;

      meta.lastIdx = list.length + newItems.length;

      return { ...state, meta, list: [...list, ...newItems] };
    }

    case ActionTypes.SET_FILTERS: {
      const { meta } = state;
      const { query, order, key } = action;

      meta.query = query;
      meta.lastIdx = 0;
      meta.order = order;
      meta.key = key || 'price';

      return { ...state, meta, list: [] };
    }
    default:
      return state;
  }
};

export default items;
