import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Header';

describe('<Header />', () => {
  beforeEach(() => {});

  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.length).to.equal(1);
  });

  it('should have a match snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
