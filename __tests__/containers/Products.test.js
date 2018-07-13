import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { configureStore as createStore } from '../../src/store';
import Products from '../../src/containers/Products';
import ActionTypes from '../../src/constants/ActionTypes';
import { addToCart, getItemsReceive } from '../../src/actions';

describe('<Products />', () => {
  let store = {};

  const middleware = () => store => next => (action) => {
    let promise;

    switch (action.type) {
      case ActionTypes.GET_INITIAL_ITEMS_REQUEST:
        promise = new Promise((resolve) => {
          resolve();
        });
        break;

      default:
        break;
    }

    next(action);
    return promise;
  };

  beforeAll(() => {
    const middlewares = [middleware()];
    const mockStore = configureStore(middlewares);
    store = mockStore({
      items: {
        list: [],
        meta: {}
      }
    });
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Products />, { context: { store } });

    expect(wrapper).to.be.a('object');
  });

  it('component should have been mounted', () => {
    const match = { params: { id: 1 } };
    const spy = sinon.spy(Products.prototype, 'componentDidMount');

    const wrapper = mount(<Products match={match} />, { context: { store } });

    expect(spy.callCount).to.equal(1);
  });

  it('should add item to cart', () => {
    const store = createStore();
    store.dispatch(
      getItemsReceive([
        {
          id: 1,
          name: 'test',
          quantity: 1,
          price: 1,
          img: ''
        }
      ])
    );

    const wrapper = mount(<Products />, { context: { store } });

    const element = wrapper.find('.add-to-cart').at(0);

    expect(store.getState().cart.items.length).to.equal(0);

    element.simulate('click');

    expect(store.getState().cart.items.length).to.equal(1);
  });

  it('should have a match snapshot', () => {
    const wrapper = shallow(<Products />, { context: { store } });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
