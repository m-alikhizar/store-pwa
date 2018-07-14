import ActionTypes from '../constants/ActionTypes';

export const getInitialItemsRequest = () => ({
  type: ActionTypes.GET_INITIAL_ITEMS_REQUEST
});

export const getItemsRequest = index => ({
  type: ActionTypes.GET_ITEMS_REQUEST,
  index
});

export const getItemsError = () => ({
  type: ActionTypes.GET_ITEMS_ERROR
});

export const getItemsReceive = items => ({
  type: ActionTypes.GET_ITEMS_RECEIVE,
  items
});

export const setFilters = ({ query = '', order = '', key = '' }) => ({
  type: ActionTypes.SET_FILTERS,
  query,
  order,
  key
});

export const getItemRequest = id => ({
  type: ActionTypes.GET_ITEM_REQUEST,
  id
});

export const getItemReceive = item => ({
  type: ActionTypes.GET_ITEM_RECEIVE,
  item
});

export const getSearchSuggestions = query => ({
  type: ActionTypes.FETCH_SEARCH_SUGGESTIONS,
  query
});

export const addToCart = item => ({
  type: ActionTypes.ADD_TO_CART,
  item
});

export const checkout = items => ({
  type: ActionTypes.CHECKOUT,
  items
});
