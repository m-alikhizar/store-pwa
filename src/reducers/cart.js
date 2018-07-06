import ActionTypes from '../constants/ActionTypes';
import Storage from '../helpers/storage';

const defaultState = {
  items: [],
  count: 0
};

const cart = (state = defaultState, action) => {

  switch(action.type) {

    case ActionTypes.ADD_TO_CART:

      const items = state.items;
      const item = {
        ...action.item,
        quantity: action.quantity
      };

      const atIdx = items.findIndex(it => it.id === item.id);

      if(atIdx != -1) {
        items[atIdx].quantity += item.quantity;
      } else {
        items.push(item);
      }

      state.price = items.reduce((total, i) => ((i.price * i.quantity) + total), 0);
      state.count = items.reduce((count, i) => (i.quantity + count), 0);

      const newState = { ...state, items };

      Storage.write('cart', JSON.stringify(newState))
      .then(() => {
        console.log('Storage syncing success.');
      })
      .catch(() => {
        console.log('Storage syncing failed.');
      });

      return newState;

    case ActionTypes.CHECKOUT:

      Storage.purge('cart', JSON.stringify(newState))
      .finally(() => {
        location.href = 'https://www.google.com';
      });

      return state;

    default:
      return state
  }
}

export default cart;
