import React from 'react';
import _ from 'lodash';

const InfiniteScroll = conditionFn => Component => class withInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = _.throttle(this.onScroll, 1000).bind(this);

    this.getData = this.getData.bind(this);

    window.addEventListener('scroll', this.onScroll, false);

    this.state = {
      error: false,
      loading: false
    };
  }

  componentWillMount() {
    this.getData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll(e) {
    if (conditionFn(this.props) && !this.state.loading && !this.state.error) {
      e.preventDefault();
      this.getData();
    }
  }

  getData() {
    const promise = this.props.onPaginatedSearch();

    this.setState({
      error: false,
      loading: true
    });

    promise
      .then(() => {
        this.setState({
          error: false,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    const newProps = { ...this.props, ...this.state };

    return <Component {...newProps} />;
  }
};

export default InfiniteScroll;
