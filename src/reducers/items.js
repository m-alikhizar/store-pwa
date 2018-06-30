import ActionTypes from '../constants/ActionTypes';
import item from './item';

const items = (state = [], action) => {
  switch(action.type) {

    case ActionTypes.FETCH_PRODUCTS_RECEIVE:

      return action.items.map(i => item(i, action));

    case ActionTypes.TOGGLE_PROPERTY:

    default:
      return state;
  }
};

export default items;
