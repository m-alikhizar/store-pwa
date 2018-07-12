import React from 'react';
import _ from 'lodash';
import { getInitialItemsError } from '../../actions';

const InfiniteScroll = conditionFn => Component => class withInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = _.throttle(this.onScroll, 1000).bind(this);

    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll(e) {
    const { meta } = this.props;

    if (conditionFn(this.props) && !meta.loading && !meta.error) {
      e.preventDefault();

      const promise = this.props.getItemsRequest();

      const { dispatch } = this.props;

      promise.catch(() => {
        dispatch(getInitialItemsError());
      });
    }
  }

  render() {
    return <Component {...this.props} />;
  }
};

export default InfiniteScroll;
