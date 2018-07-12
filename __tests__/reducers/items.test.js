import items from '../../src/reducers/items';
import {
  getInitialItemsRequest,
  getItemsRequest,
  getItemsError,
  getItemsReceive,
  setFilters
} from '../../src/actions';

describe('items reducer', () => {
  it('should return the initial state', () => {
    const defaultState = {
      meta: { key: 'price' },
      list: []
    };

    expect(items(undefined, {})).to.deep.equal(defaultState);
  });

  it('should handle GET_INITIAL_ITEMS_REQUEST', () => {
    const expected = {
      meta: { key: 'price', loading: true, error: false },
      list: []
    };

    expect(items(undefined, getInitialItemsRequest())).to.deep.equal(expected);
    expect(items(undefined, getItemsRequest())).to.deep.equal(expected);
  });

  it('should handle GET_ITEMS_ERROR', () => {
    const expected = {
      meta: { key: 'price', loading: false, error: true },
      list: []
    };

    expect(items(undefined, getItemsError())).to.deep.equal(expected);
  });

  it('should handle GET_ITEMS_RECEIVE', () => {
    const expected = {
      list: [
        {
          id: 1,
          title: 'title'
        }
      ]
    };

    expect(items(undefined, getItemsReceive(expected.list)).list).to.deep.equal(expected.list);
  });

  it('should handle SET_FILTERS', () => {
    const expected = {
      query: 'test'
    };

    expect(items(undefined, setFilters({ query: 'test' })).meta.query).is.equal(expected.query);
  });
});
