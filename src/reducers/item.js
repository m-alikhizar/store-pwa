import ActionTypes from '../constants/ActionTypes';

const item = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_ITEM_RECEIVE:
      return { ...action.item };

    default:
      return state;
  }
};

export default item;
