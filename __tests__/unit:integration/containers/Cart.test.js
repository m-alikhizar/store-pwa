import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Cart from '../../../src/containers/Cart';

describe('<Cart />', () => {
  let store = {};

  beforeAll(() => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    store = mockStore({ cart: { items: [] } });
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Cart />, { context: { store } });

    expect(wrapper).to.be.a('object');
  });

  it('should have a match snapshot', () => {
    const wrapper = shallow(<Cart />, { context: { store } });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
