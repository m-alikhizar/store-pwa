import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Products from '../../src/containers/Products';
import ActionTypes from '../../src/constants/ActionTypes';

describe('<Products />', () => {
  let store = {};

  const middleware = () => store => next => (action) => {
    let promise;

    switch (action.type) {
      case ActionTypes.INITIAL_ITEMS:
        promise = new Promise((resolve, reject) => {
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

  it('should have a match snapshot', () => {
    const wrapper = shallow(<Products />, { context: { store } });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
