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

export const applySearchCriteria = (query) => {
  return {
    type: ActionTypes.APPLY_SEARCH_CRITERIA,
    query: query
  }
}

export const getSearchSuggestions = (query) => {
  return {
    type: ActionTypes.FETCH_SEARCH_SUGGESTIONS,
    query: query
  }
}
