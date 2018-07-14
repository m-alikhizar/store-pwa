import configureStore from 'redux-mock-store';
import * as Actions from '../../../src/actions';
import ActionTypes from '../../../src/constants/ActionTypes';

describe('actions', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureStore();
    store = mockStore({});
  });

  it('should create an action to get Initial Items', () => {
    store.dispatch(Actions.getInitialItemsRequest());

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.GET_INITIAL_ITEMS_REQUEST
      }
    ];

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to get items request', () => {
    const index = 1;

    store.dispatch(Actions.getItemsRequest(index));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.GET_ITEMS_REQUEST,
        index
      }
    ];

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to get items error', () => {
    store.dispatch(Actions.getItemsError());

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.GET_ITEMS_ERROR
      }
    ];
    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to get items receive', () => {
    const items = [
      {
        id: 1,
        title: 'title'
      }
    ];
    const expected = [
      {
        type: ActionTypes.GET_ITEMS_RECEIVE,
        items
      }
    ];

    store.dispatch(Actions.getItemsReceive(items));

    const actions = store.getActions();

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to set filters', () => {
    const filters = {
      query: 'test',
      order: 'asc',
      key: 'price'
    };

    store.dispatch(Actions.setFilters(filters));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.SET_FILTERS,
        ...filters
      }
    ];

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to get item request', () => {
    const id = 1;

    store.dispatch(Actions.getItemRequest(id));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.GET_ITEM_REQUEST,
        id
      }
    ];

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to get item receive', () => {
    const item = [{ id: 1, title: 'name' }];

    store.dispatch(Actions.getItemReceive(item));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.GET_ITEM_RECEIVE,
        item
      }
    ];

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to get search suggestions', () => {
    const query = 'test';

    store.dispatch(Actions.getSearchSuggestions(query));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.FETCH_SEARCH_SUGGESTIONS,
        query
      }
    ];

    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to Add item to Cart', () => {
    const item = {
      id: 1,
      title: 'title'
    };

    store.dispatch(Actions.addToCart(item));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.ADD_TO_CART,
        item
      }
    ];
    expect(actions).to.deep.equal(expected);
  });

  it('should create an action to checkout', () => {
    const items = [
      {
        id: 1,
        title: 'title'
      }
    ];

    store.dispatch(Actions.checkout(items));

    const actions = store.getActions();

    const expected = [
      {
        type: ActionTypes.CHECKOUT,
        items
      }
    ];
    expect(actions).to.deep.equal(expected);
  });
});
