import ActionTypes from '../constants/ActionTypes';

const item = (state = {}, action) => {

  switch(action.type) {

    case ActionTypes.ADD_ITEM:

      return { ...state };

    default:
      return state
  }
}

export default item;
