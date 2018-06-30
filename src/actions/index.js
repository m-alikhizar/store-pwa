import ActionTypes from '../constants/ActionTypes';

export const toggleProperty = (id, prop) => {
  console.log('In action');
  return {
    type: ActionTypes.TOGGLE_PROPERTY,
    id, prop
  }
}

export const fetchProductsRequest = () => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsReceive = (items) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_RECEIVE,
    items
  }
}

export const fetchProductsError = (error) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_ERROR,
    error
  }
}
