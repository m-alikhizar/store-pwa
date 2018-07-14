/* @flow */
import ActionTypes from '../constants/ActionTypes';
import Storage from '../helpers/storage';

const defaultState = {
  items: [],
  count: 0
};

const cart = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { items } = state;

      const { item } = action;

      const atIdx = items.findIndex(i => i.id === item.id);

      if (atIdx !== -1) {
        items[atIdx].quantity += item.quantity;
      } else {
        items.push(item);
      }

      const newState = {
        items,
        price: items.reduce((total, i) => i.price * i.quantity + total, 0),
        count: items.reduce((total, i) => i.quantity + total, 0)
      };

      Storage.write('cart', JSON.stringify(newState));

      return newState;
    }
    case ActionTypes.CHECKOUT: {
      Storage.purge('cart');

      return {
        items: [],
        count: 0
      };
    }
    default:
      return state;
  }
};

export default cart;
