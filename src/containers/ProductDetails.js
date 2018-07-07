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
    const id = this.props.match;

    this.props.dispatch(addItem(1));
  }

  render() {
    const { item, dispatch } = this.props;

    return (
      <Container style={{margin: '90px 0'}} fluid={true}>
        <Item {...item} children={action}/>
      </Container>
    );
  }
}

const action = (<Button size="lg" onClick={() => dispatch(addToCart({id: item.id, quantity: 1}))} color="primary">Add to Cart</Button>);

const mapStateToProps = (store) => ({ item: store.item });

const mapDispatchToProps = (dispatch) => ({ dispatch })

const ProductDetails = connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

export default ProductDetails;
