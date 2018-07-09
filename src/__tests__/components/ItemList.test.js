import React from 'react';
import ItemList from '../../components/ItemList';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('<ItemList />', () => {

  let wrapper;

  const props = {
    itemlist: [],
    meta: {},
    dispatch: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<ItemList {...props}/>);
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have been called componentDidMount', () => {

    const componentDidMount = sinon.spy();

    // wrapper.instance().componentDidMount = componentDidMount;

    mount(<ItemList  {...props}/>)

    expect(wrapper.instance().componentDidMount.callCount).toEqual(1);
  });

  it('should have called click event', () => {
    const component = toJson(wrapper);
    const buttons = wrapper.find('Button');

    expect(buttons).toHaveLength(2);

    const onButtonClick = jest.fn();
    wrapper.instance().onButtonClick = onButtonClick;

    buttons.first().simulate('click');

    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should have a match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
