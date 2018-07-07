import { initialItems, applyProductsUpdate, allItems } from '../actions';
import { getProductsData, getProductData } from '../services/api.service';
import ActionTypes from '../constants/ActionTypes';
import { uid } from '../helpers/utils';
import axios from 'axios';

let promise;

const PRODUCT_FETCH_LIMIT = 10;
let products_data = [];

export default function createAPIMiddleware() {

  return store => next => action => {

    switch (action.type) {

      case ActionTypes.INITIAL_ITEMS: {
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

              products_data = items;

              const currentIdx = action.index || 0;

              const filtered = products_data.filter(product => product.id <= currentIdx + PRODUCT_FETCH_LIMIT)

              next(applyProductsUpdate(filtered));
              next(allItems(products_data));
            });

          return promise;
        }
      }
      case ActionTypes.APPLY_SEARCH_CRITERIA: {

        if(promise) {
          promise.then(() => next(action));
        }

      }

      case ActionTypes.ADD_TO_CART: {
        action.item = products_data.filter(item => item.id === action.id).pop();

        break;
      }

      case ActionTypes.ADD_ITEM: {

        getProductData(action.id).then((data) => {
          action.item = data;
          next(action);
        });

        break;
      }
    }

    // Regardless of what happens in the above `switch`, we always want to pass
    // the initial action along, for any optimistic/loading UI states.
    next(action);
  };
}
