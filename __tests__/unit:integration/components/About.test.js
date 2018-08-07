import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import About from '../../../src/components/About';

describe('<About />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('should render without crashing', () => {
    expect(wrapper.length).to.equal(1);
  });

  it('should match snapshot', () => {
    const component = toJson(wrapper);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
