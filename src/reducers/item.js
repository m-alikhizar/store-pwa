import ActionTypes from '../constants/ActionTypes';

const item = (state = {}, action) => {

  switch(action.type) {

    case ActionTypes.FETCH_PRODUCTS_RECEIVE:

      return { key: state.id, ...state };

    case ActionTypes.TOGGLE_PROPERTY:

      if(action.id !== state.id) {
          return state
      }

      state[action.prop] = !state[action.prop]

      return { ...state }

    default:
      return state
  }
}

export default item;
