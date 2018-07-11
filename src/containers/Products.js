import React from 'react';
import { compose } from 'recompose';
import ItemList from '../components/ItemList';
import { initialItems } from '../actions';

import Paginated from '../hoc/with/Paginated';
import Loading from '../hoc/with/Loading';
import InfiniteScroll from '../hoc/with/InfiniteScroll';

import { connect } from '../decorators';

const paginatedCondition = props => !props.loading && props.error;

const loadingCondition = props => props.loading;

const infiniteScrollCondition = props => window.innerHeight + window.scrollY > document.body.offsetHeight - 10 && props.itemlist.length;

const AdvancedList = compose(
  InfiniteScroll(infiniteScrollCondition),
  Paginated(paginatedCondition),
  Loading(loadingCondition)
)(ItemList);

const last = (items = []) => (items.length ? _.maxBy(items, 'id') : {});

@connect(
  state => ({
    items: state.items,
    itemlist: state.items.list,
    meta: state.items.meta
  }),
  dispatch => ({
    dispatch,
    dispatchPaginatedSearch(index = 0) {
      return dispatch(initialItems(index));
    }
  }),
  (props, otherProps, ownProps) => ({
    ...props,
    ...otherProps,
    ...ownProps,
    onPaginatedSearch: () => otherProps.dispatchPaginatedSearch(last(props.itemlist).id)
  })
)
export default class Products extends React.Component {
  componentDidMount() {}

  render() {
    return <AdvancedList {...this.props} />;
  }
}
