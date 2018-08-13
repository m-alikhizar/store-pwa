import React from 'react';
import throttle from 'lodash.throttle';
import { fromEvent } from "rxjs";

const InfiniteScroll = conditionFn => Component => class withInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = throttle(this.onScroll, 1000).bind(this);

    this.subscription = fromEvent(window, 'scroll').subscribe(this.onScroll);
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  onScroll(e) {
    conditionFn(this.props) && this.props.getItemsRequest();
  }

  render() {
    return <Component {...this.props} />;
  }
};

export default InfiniteScroll;
