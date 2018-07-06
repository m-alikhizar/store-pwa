import React from 'react';
import { connect } from 'react-redux';
import { addItem, addToCart } from '../actions';
import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

class Item extends React.Component {
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
        <Card style={{ flexDirection: 'row'}}>
          <CardImg top style={{width: 'auto', height: '400px'}} src={item.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.price}</CardText>
            <Button size="lg" onClick={() => dispatch(addToCart({id: item.id, quantity: 1}))} color="primary">Add to Cart</Button>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({ item: store.item });

const mapDispatchToProps = (dispatch) => ({ dispatch })

const ProductDetails = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ProductDetails;
