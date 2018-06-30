import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { toggleProperty, fetchProductsRequest } from '../actions';
import { getStore } from '../store';

function withSubscription(WrappedComponent, fetchData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      fetchData(props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

const ItemListWithSubscription = withSubscription(ItemList, () => {
  const store = getStore();
  store.dispatch(fetchProductsRequest());
});

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleProp: (id, prop) => {
      dispatch(toggleProperty(id, prop));
    }
  };
}

const Products = connect(mapStateToProps, mapDispatchToProps)(ItemListWithSubscription);

export default Products;
