import React from 'react';
import {
  Container, Card, CardImg, CardBody, CardTitle, CardText, Button
} from 'reactstrap';
import { getItemRequest, addToCart } from '../actions';
import Item from '../components/Item';
import { connect } from '../decorators';

const Actions = ({ dispatch, item }) => (
  <Button size="lg" onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))} color="primary">
    Add to Cart
  </Button>
);

@connect(
  store => ({ item: store.item }),
  dispatch => ({ dispatch })
)
export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      const {
        props: {
          match: {
            params: { id }
          }
        }
      } = this;

      if (id) this.props.dispatch(getItemRequest(id));
    } catch (e) {
      console.error('Url mismatch. provide product id in query parameters.');
    }
  }

  render() {
    const { item, dispatch } = this.props;

    return (
      <Container style={{ margin: '90px 0' }} fluid>
        {item.id && <Item {...item} children={<Actions dispatch={dispatch} item={item} />} />}
      </Container>
    );
  }
}
