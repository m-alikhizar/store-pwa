import {
  fetchProductsRequest,
  fetchProductsReceive,
  fetchProductsError,
} from '../actions';

import ActionTypes from '../constants/ActionTypes';
import { getProductsData } from '../services/api.service';

export default function createAPIMiddleware() {
  return store => next => action => {

    switch (action.type) {
      case ActionTypes.FETCH_PRODUCTS_REQUEST: {
        getProductsData()
          .then(json => {
            console.log('Got JSON', json);
            next(fetchProductsReceive(json));
          })
          .catch(error => {
            console.error('CAUGHT ERROR IN USER DATA', error);
            next(fetchProductsError(error));
          });
        break;
      }
    }

    // Regardless of what happens in the above `switch`, we always want to pass
    // the initial action along, for any optimistic/loading UI states.
    next(action);
  };
}
