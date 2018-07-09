import React from 'react';
import Item from '../../components/Item';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Item />', () => {

  let wrapper;

  const props = {
    img: 'test',
    name: 'name',
    price: 1,
    id: 1,
    dispatch: jest.fn()
  };

  beforeEach(() => {

    wrapper = shallow(<Item {...props}/>);
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('component should have been mounted', () => {
    const spy = sinon.spy(Item.prototype, "componentDidMount");

    const mounted = mount(<ItemList {...props} />);

    expect(spy.callCount).to.equal(1);
  });

  it('should match snapshot', () => {
    const component = toJson(wrapper);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
