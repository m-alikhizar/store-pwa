import * as Actions from '../../src/actions';
import ActionTypes from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to get Initial Items', () => {
    const expected = {
      type: ActionTypes.GET_INITIAL_ITEMS_REQUEST
    };
    expect(Actions.getInitialItemsRequest()).to.deep.equal(expected);
  });

  it('should create an action to get items request', () => {
    const index = 1;
    const expected = {
      type: ActionTypes.GET_ITEMS_REQUEST,
      index
    };
    expect(Actions.getItemsRequest(index)).to.deep.equal(expected);
  });

  it('should create an action to get items error', () => {
    const expected = {
      type: ActionTypes.GET_ITEMS_ERROR
    };
    expect(Actions.getItemsError()).to.deep.equal(expected);
  });

  it('should create an action to get items receive', () => {
    const items = [
      {
        id: 1,
        title: 'title'
      }
    ];
    const expected = {
      type: ActionTypes.GET_ITEMS_RECEIVE,
      items
    };
    expect(Actions.getItemsReceive(items)).to.deep.equal(expected);
  });

  it('should create an action to set filters', () => {
    const filters = {
      query: 'test',
      order: 'asc',
      key: 'price'
    };

    const expected = {
      type: ActionTypes.SET_FILTERS,
      ...filters
    };

    expect(Actions.setFilters(filters)).to.deep.equal(expected);
  });

  it('should create an action to get item request', () => {
    const id = 1;

    const expected = {
      type: ActionTypes.GET_ITEM_REQUEST,
      id
    };

    expect(Actions.getItemRequest(id)).to.deep.equal(expected);
  });

  it('should create an action to get item receive', () => {
    const item = [{ id: 1, title: 'name' }];

    const expected = {
      type: ActionTypes.GET_ITEM_RECEIVE,
      item
    };

    expect(Actions.getItemReceive(item)).to.deep.equal(expected);
  });

  it('should create an action to get search suggestions', () => {
    const query = 'test';

    const expected = {
      type: ActionTypes.FETCH_SEARCH_SUGGESTIONS,
      query
    };

    expect(Actions.getSearchSuggestions(query)).to.deep.equal(expected);
  });

  it('should create an action to Add item to Cart', () => {
    const item = {
      id: 1,
      title: 'title'
    };

    const expected = {
      type: ActionTypes.ADD_TO_CART,
      item
    };
    expect(Actions.addToCart(item)).to.deep.equal(expected);
  });

  it('should create an action to checkout', () => {
    const items = [
      {
        id: 1,
        title: 'title'
      }
    ];

    const expected = {
      type: ActionTypes.CHECKOUT,
      items
    };
    expect(Actions.checkout(items)).to.deep.equal(expected);
  });
});
