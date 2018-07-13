import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import ItemList from '../../../src/components/ItemList';

describe('<ItemList />', () => {
  const props = {
    itemlist: [],
    meta: {},
    dispatch: jest.fn()
  };

  beforeEach(() => {});

  it('should render without crashing', () => {
    const wrapper = shallow(<ItemList {...props} />);

    expect(wrapper.length).to.equal(1);
  });

  it('component should have been mounted', () => {
    const spy = sinon.spy(ItemList.prototype, 'componentDidMount');

    const mounted = mount(<ItemList {...props} />);

    expect(spy.callCount).to.equal(1);
  });

  it('should have called click event', () => {
    const wrapper = shallow(<ItemList {...props} />);

    const buttons = wrapper.find('Button');

    expect(buttons).to.have.lengthOf(2);

    const stub = sinon.stub(wrapper.instance(), 'onButtonClick');

    buttons.first().simulate('click');

    expect(stub.callCount).to.equal(1);
  });

  // it('should have a match snapshot', () => {
  //   const wrapper = shallow(<ItemList {...props} />);

  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
});
