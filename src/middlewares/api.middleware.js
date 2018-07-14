import { getItemsReceive, getItemReceive, getItemsError } from '../actions';
import { getProductsData, getSearchSuggestions, getProductData } from '../services/api.service';
import ActionTypes from '../constants/ActionTypes';

export default function createAPIMiddleware() {
  return store => next => (action) => {
    const state = store.getState();
    let promise;

    switch (action.type) {
      case ActionTypes.GET_INITIAL_ITEMS_REQUEST:
        promise = getProductsData(0, state.items.meta)
          .then(items => next(getItemsReceive(items)))
          .catch(() => next(getItemsError('Could not fetch initial items.')));
        break;

      case ActionTypes.GET_ITEMS_REQUEST:
        promise = getProductsData(action.index, state.items.meta)
          .then(items => next(getItemsReceive(items)))
          .catch(() => next(getItemsError('Could not fetch items.')));
        break;

      case ActionTypes.FETCH_SEARCH_SUGGESTIONS:
        promise = getSearchSuggestions(action.query);
        break;

      case ActionTypes.GET_ITEM_REQUEST:
        promise = getProductData(action.id).then(product => next(getItemReceive(product)));
        break;

      default:
        break;
    }

    // Regardless of what happens in the above `switch`, we always want to pass
    // the initial action along, for any optimistic/loading UI states.
    next(action);

    return promise;
  };
}
