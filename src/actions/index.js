import ActionTypes from '../constants/ActionTypes';

export const toggleProperty = (id, prop) => {
  return {
    type: ActionTypes.TOGGLE_PROPERTY,
    id, prop
  }
}

export const allProductsData = (items) => {
  return {
    type: ActionTypes.ALL_PRODUCTS_DATA,
    items
  }
}

export const fetchProductsRequest = (index) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_REQUEST,
    index
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
