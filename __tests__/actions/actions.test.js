import * as Actions from '../../src/actions';
import ActionTypes from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to list All Items', () => {
    const items = [
      {
        id: 1,
        title: 'title'
      }
    ];

    const expected = {
      type: ActionTypes.ALL_ITEMS,
      items
    };

    expect(Actions.allItems(items)).to.deep.equal(expected);
  });

  it('should create an action to Initial Items', () => {
    const index = 0;

    const expected = {
      type: ActionTypes.INITIAL_ITEMS,
      index
    };
    expect(Actions.initialItems(index)).to.deep.equal(expected);
  });

  it('should create an action to Add Item', () => {
    const id = 0;

    const expected = {
      type: ActionTypes.ADD_ITEM,
      id
    };

    expect(Actions.addItem(id)).to.deep.equal(expected);
  });

  it('should create an action to Apply Products Update', () => {
    const items = [{ id: 1 }];

    const expected = {
      type: ActionTypes.APPLY_PRODUCTS_UPDATE,
      items
    };

    expect(Actions.applyProductsUpdate(items)).to.deep.equal(expected);
  });

  it('should create an action to Apply Search Criteria', () => {
    const query = 'test';

    const expected = {
      type: ActionTypes.APPLY_SEARCH_CRITERIA,
      query
    };

    expect(Actions.applySearchCriteria(query)).to.deep.equal(expected);
  });

  it('should create an action to Get Search Suggestions', () => {
    const query = 'test';

    const expected = {
      type: ActionTypes.FETCH_SEARCH_SUGGESTIONS,
      query
    };

    expect(Actions.getSearchSuggestions(query)).to.deep.equal(expected);
  });

  it('should create an action to Add to Cart', () => {
    const props = { id: 1, item: {} };

    const expected = {
      type: ActionTypes.ADD_TO_CART,
      ...props
    };

    expect(Actions.addToCart(props)).to.deep.equal(expected);
  });
});
