import React from 'react';
import throttle from 'lodash.throttle';
import { getItemsRequest } from '../../actions';

const InfiniteScroll = conditionFn => Component => class withInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = throttle(this.onScroll, 1000).bind(this);

    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll(e) {
    conditionFn(this.props) && this.props.getItemsRequest();
  }

  render() {
    return <Component {...this.props} />;
  }
};

export default InfiniteScroll;
