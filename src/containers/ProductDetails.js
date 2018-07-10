import React from 'react';
import { connect } from 'react-redux';
import { addItem, addToCart } from '../actions';
import Item from '../components/Item';
import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      const { props: { match: { params: { id } } } } = this;

      if(id) this.props.dispatch(addItem(1));

    } catch(e) {
      console.error('Url mismatch. provide product id in query parameters.');
    }
  }

  render() {
    const { item, dispatch } = this.props;

    return (
      <Container style={{margin: '90px 0'}} fluid={true}>
        { item.id && <Item {...item} children={<Actions dispatch={dispatch} item={item} />} /> }
      </Container>
    );
  }
}

const Actions = ({ dispatch, item }) => (<Button size="lg" onClick={() => dispatch(addToCart({item, id: item.id, quantity: 1}))} color="primary">Add to Cart</Button>);

const mapStateToProps = (store) => ({ item: store.item });

const mapDispatchToProps = (dispatch) => ({ dispatch })

const ProductDetails = connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

export default ProductDetails;
