import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import App from '../../components/App'
import { shallow } from 'enzyme';


describe('<App />', () => {
  xit('should render without crashing', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.dive();

    // expect(component).toMatchSnapshot();
  })
})
