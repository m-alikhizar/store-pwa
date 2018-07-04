import {
  fetchProductsRequest,
  applyProductsUpdate,
  allProductsData
} from '../actions';

import axios from 'axios';

import ActionTypes from '../constants/ActionTypes';
import { getProductsData } from '../services/api.service';

let promise;

const PRODUCT_FETCH_LIMIT = 5;
let products_data = [];

export default function createAPIMiddleware() {

  return store => next => action => {

    switch (action.type) {

      case ActionTypes.FETCH_PRODUCTS_REQUEST: {
        if(products_data.length) {

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const currentIdx = action.index || 0;

              const filtered = products_data.filter(product => product.id <= currentIdx + PRODUCT_FETCH_LIMIT)

              next(applyProductsUpdate(filtered));

              resolve();
              // reject();
            }, 1000);
          });

        } else {
          promise = getProductsData();

          promise.then(items => {
              console.log('Initial Product Request', items);

              products_data = items;

              const currentIdx = action.index || 0;

              const filtered = products_data.filter(product => product.id <= currentIdx + PRODUCT_FETCH_LIMIT)

              next(applyProductsUpdate(filtered));
              next(allProductsData(products_data));
            });

          return promise;
        }

        // if(promise) {
        //   promise.then(() => next(action));
        // }



      }
      case ActionTypes.APPLY_SEARCH_CRITERIA: {

        if(promise) {
          promise.then(() => next(action));
        }

      }
    }

    // Regardless of what happens in the above `switch`, we always want to pass
    // the initial action along, for any optimistic/loading UI states.
    next(action);
  };
}
