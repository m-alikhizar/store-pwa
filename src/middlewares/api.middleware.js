import {
  fetchProductsRequest,
  fetchProductsReceive,
  fetchProductsError,
} from '../actions';

import ActionTypes from '../constants/ActionTypes';
import { getProductsData } from '../services/api.service';

let defer;
export default function createAPIMiddleware() {
  return store => next => action => {

    switch (action.type) {
      case ActionTypes.FETCH_PRODUCTS_REQUEST: {
        defer = getProductsData();

        defer.then(json => {
            console.log('Got JSON', json);
            next(fetchProductsReceive(json));
          })
          .catch(error => {
            console.error('CAUGHT ERROR IN USER DATA', error);
            next(fetchProductsError(error));
          });
        break;
      }

      case ActionTypes.APPLY_SEARCH_CRITERIA: {
        if(defer) {
          defer.then(() => next(action));
        }

        break;
      }
    }

    // Regardless of what happens in the above `switch`, we always want to pass
    // the initial action along, for any optimistic/loading UI states.
    next(action);
  };
}
