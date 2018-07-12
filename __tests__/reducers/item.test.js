import item from '../../src/reducers/item';
import { getItemReceive } from '../../src/actions';

describe('item reducer', () => {
  it('should return the initial state', () => {
    const defaultState = {};

    expect(item(undefined, {})).to.deep.equal(defaultState);
  });

  it('should handle GET_ITEM_RECEIVE', () => {
    const data = {
      id: 1,
      title: 'title'
    };

    const expected = data;

    expect(item(undefined, getItemReceive(data))).to.deep.equal(expected);
  });
});
