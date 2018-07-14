import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import reducers from '../../../src/reducers';
import App from '../../../src/components/App';

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.dive();

    expect(component).toMatchSnapshot();
  });
});
