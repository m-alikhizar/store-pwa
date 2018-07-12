import item from '../../src/reducers/item';
import ActionTypes from '../../src/constants/ActionTypes';

describe('item reducer', () => {
  it('should return the initial state', () => {
    const defaultState = {};

    expect(item(undefined, {})).to.deep.equal(defaultState);
  });

  it('should handle ADD_ITEM', () => {
    const data = {
      id: 1,
      title: 'title'
    };

    const action = {
      type: ActionTypes.ADD_ITEM,
      item: data
    };

    const expected = data;

    expect(item(undefined, action)).to.deep.equal(expected);
  });
});
