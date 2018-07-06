import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { fetchProductsRequest } from '../actions';
import { withSubscription, withPaginated, withLoading, withInfiniteScroll } from '../high-order-components';
import { compose } from 'recompose';

const subscription = dispatch => dispatch(fetchProductsRequest());

const paginatedCondition = props => !props.loading && props.error;

const loadingCondition = props => props.loading;

const infiniteScrollCondition = props => {

  return (
  (window.innerHeight + window.scrollY) > (document.body.offsetHeight - 10)
  && props.items.length
  )
}

const AdvancedList = compose(
  //withSubscription(subscription),
  withInfiniteScroll(infiniteScrollCondition),
  withPaginated(paginatedCondition),
  withLoading(loadingCondition),
)(ItemList);

const getCurrentIndex = (items = []) => {
  const lastItem = items[items.length - 1] || {};
  return lastItem.id || 0;
}

const mapStateToProps = state => ({ items: state.items })

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatchPaginatedSearch(index) {
    return dispatch(fetchProductsRequest(index))
  }
});

const mergeProps = (props, otherProps, ownProps) => {
  return {
    ...props,
    ...otherProps,
    ...ownProps,
    onPaginatedSearch: () => otherProps.dispatchPaginatedSearch(getCurrentIndex(props.items))
  };
};

const Products = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AdvancedList);

export default Products;
