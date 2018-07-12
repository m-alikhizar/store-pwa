import { configureStore } from '../../src/store/configure-store';
import { getList } from '../../src/reducers';

describe('store', () => {
  it('should create an empty store', () => {
    const initialState = {};

    const store = configureStore(initialState);

    expect(store.getState()).to.be.a('object');
  });

  it('should create an store with state', () => {
    const initialState = {
      cart: {
        items: [
          {
            id: 1,
            title: 'title'
          }
        ],
        count: 1
      }
    };

    const store = configureStore(initialState);

    const expected = initialState.cart;

    expect(store.getState().cart).to.deep.equal(expected);
  });

  it('should create an store with reducers', () => {
    const keys = Object.keys(getList());

    expect(keys.length).to.be.equal(3);
  });
});
