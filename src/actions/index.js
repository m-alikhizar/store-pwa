import ActionTypes from '../constants/ActionTypes';

export const allItems = (items) => {
  return {
    type: ActionTypes.ALL_ITEMS,
    items
  }
}

export const initialItems = (index) => {
  return {
    type: ActionTypes.INITIAL_ITEMS,
    index
  }
}

export const addItem = (id) => {
  return {
    type: ActionTypes.ADD_ITEM,
    id
  }
}

export const applyProductsUpdate = (items) => {
  return {
    type: ActionTypes.APPLY_PRODUCTS_UPDATE,
    items
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

export const addToCart = (props) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    ...props
  }
}

export const checkout = (items) => {
  return {
    type: ActionTypes.CHECKOUT,
    items
  }
}

export const sort = (order, key) => {
  return {
    type: ActionTypes.APPLY_SORTING,
    order, key
  }
}
