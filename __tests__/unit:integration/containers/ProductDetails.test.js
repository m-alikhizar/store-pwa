import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ProductDetails from '../../../src/containers/ProductDetails';

describe('<ProductDetails />', () => {
  let store = {};

  beforeAll(() => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    store = mockStore({ item: {} });
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<ProductDetails />, { context: { store } });

    expect(wrapper).to.be.a('object');
  });

  it('component should have been mounted', () => {
    const match = { params: { id: 1 } };
    const spy = sinon.spy(ProductDetails.prototype, 'componentDidMount');

    const wrapper = mount(<ProductDetails match={match} />, { context: { store } });

    expect(spy.callCount).to.equal(1);
  });

  it('should have a match snapshot', () => {
    const wrapper = shallow(<ProductDetails />, { context: { store } });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
