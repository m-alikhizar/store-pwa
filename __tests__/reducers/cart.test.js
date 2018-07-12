import sinon from 'sinon';
import _ from 'lodash';
import cart from '../../src/reducers/cart';
import Storage from '../../src/helpers/storage';
import { addToCart, checkout } from '../../src/actions';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    const defaultState = {
      items: [],
      count: 0
    };

    expect(cart(undefined, {})).to.deep.equal(defaultState);
  });

  it('should handle ADD_TO_CART', () => {
    const item = {
      id: 1,
      title: 'title',
      price: 1,
      quantity: 1
    };

    const action = addToCart(item);

    sinon.stub(Storage, 'write');

    const expected = {
      items: [{ ...item }],
      count: 1,
      price: 1
    };

    expect(cart(undefined, action)).to.deep.equal(expected);
  });

  it('should handle CHECKOUT', () => {
    const defaultState = {
      items: [],
      count: 0
    };

    const promise = Promise.resolve();

    promise.finally = _.noop;

    sinon.stub(Storage, 'purge').returns(promise);

    const result = cart(undefined, checkout());

    expect(result).to.deep.equal(defaultState);
  });
});
