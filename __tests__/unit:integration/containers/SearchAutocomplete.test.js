import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import SearchAutocomplete from '../../../src/containers/SearchAutocomplete';
import ActionTypes from '../../../src/constants/ActionTypes';

describe('<SearchAutocomplete />', () => {
  let store = {};

  beforeAll(() => {
    const middleware = () => store => next => (action) => {
      let promise;

      switch (action.type) {
        case ActionTypes.SET_FILTERS:
        case ActionTypes.FETCH_SEARCH_SUGGESTIONS:
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

    const middlewares = [middleware()];
    const mockStore = configureStore(middlewares);
    store = mockStore({
      search: {
        suggestions: []
      }
    });
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<SearchAutocomplete />, { context: { store } });

    expect(wrapper).to.be.a('object');
  });

  it('component should have been mounted', () => {
    const spy = sinon.spy(SearchAutocomplete.prototype, 'componentDidMount');

    const wrapper = mount(<SearchAutocomplete />, { context: { store } });

    expect(spy.callCount).to.equal(1);
  });

  it('should have a match snapshot', () => {
    const wrapper = shallow(<SearchAutocomplete />, { context: { store } });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
