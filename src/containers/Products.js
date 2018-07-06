import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { fetchProductsRequest } from '../actions';
import { withSubscription, withPaginated, withLoading, withInfiniteScroll } from '../high-order-components';
import { compose } from 'recompose';

const paginatedCondition = props => !props.loading && props.error;

const loadingCondition = props => props.loading;

const infiniteScrollCondition = props =>
  ((window.innerHeight + window.scrollY) > (document.body.offsetHeight - 10)
  && props.items.length);

const AdvancedList = compose(
    withInfiniteScroll(infiniteScrollCondition),
    withPaginated(paginatedCondition),
    withLoading(loadingCondition),
  )(ItemList);

const last = (items = []) => _.last(items) || {};

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = dispatch => ({
    dispatch,
    dispatchPaginatedSearch(index = 0) {
      return dispatch(fetchProductsRequest(index))
    }
  });

const mergeProps = (props, otherProps, ownProps) => ({
    ...props,
    ...otherProps,
    ...ownProps,
    onPaginatedSearch: () => otherProps.dispatchPaginatedSearch(last(props.items).id)
  });

const Products = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AdvancedList);

export default Products;
