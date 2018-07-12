import React from 'react';
import { compose } from 'recompose';
import { connect } from '../decorators';
import ItemList from '../components/ItemList';
import Paginated from '../hoc/with/Paginated';
import Loading from '../hoc/with/Loading';
import InfiniteScroll from '../hoc/with/InfiniteScroll';
import { getInitialItemsRequest, getItemsRequest, getInitialItemsError } from '../actions';

const paginatedCondition = props => !props.meta.loading && props.meta.error;

const loadingCondition = props => props.meta.loading;

const infiniteScrollCondition = props =>
  // eslint-disable-next-line
  window.innerHeight + window.scrollY > document.body.offsetHeight - 10 && props.itemlist.length;

const AdvancedList = compose(
  InfiniteScroll(infiniteScrollCondition),
  Loading(loadingCondition),
  Paginated(paginatedCondition)
)(ItemList);

@connect(
  state => ({
    items: state.items,
    itemlist: state.items.list,
    meta: state.items.meta
  }),
  dispatch => ({
    dispatch,
    dispatchGetItemsRequest(index) {
      return dispatch(getItemsRequest(index));
    }
  }),
  (props, otherProps, ownProps) => ({
    ...props,
    ...otherProps,
    ...ownProps,
    getItemsRequest: () => otherProps.dispatchGetItemsRequest(props.meta.lastIdx)
  })
)
export default class Products extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    dispatch(getInitialItemsRequest()).catch(() => {
      dispatch(getInitialItemsError());
    });
  }

  componentDidMount() {}

  render() {
    const newProps = { ...this.props, ...this.state };

    return <AdvancedList {...newProps} />;
  }
}
