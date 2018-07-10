import React from 'react';
import { connect } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Item from '../components/Item';
import { checkout } from '../actions';
import NumberFormat from 'react-number-format';
import styles from '../styles/Cart.css';

class ItemCart extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  onMouseEnter(e) {
    this.setState({
      popoverOpen: true
    });
  }

  onMouseLeave(e) {
    this.setState({
      popoverOpen: false
    });
  }

	render() {
    return (
      <div onMouseEnter={this.onMouseEnter}>
        <div id={'popover-cart'} onClick={this.toggle} onMouseLeave={this.onMouseLeave}>
          <div className={styles.bag}>
            <i>{this.props.cart.count}</i>
          </div>
        </div>
        <Popover className={styles.popover} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} placement={'bottom'} isOpen={this.state.popoverOpen} target={'popover-cart'} toggle={this.toggle}>
          <div className={styles.overlay}></div>
          <PopoverBody className={styles.body}>
            { this.props.items.map(item => (<Item key={item.id} {...item} children={<ItemActions quantity={item.quantity} />} />))}
            { !this.props.items.length && ' ITEMS' }
          </PopoverBody>

          { this.props.items.length != 0 && <div className={styles.actions}>
            <span>
            TOTAL <NumberFormat
              displayType={'text'}
              value={this.props.cart.price}
              thousandSeparator={true}
              suffix={' AED'} />
            </span>
            <Button size="sm" onClick={() => this.props.dispatch(checkout(this.props.items))}>Secure Checkout</Button>
          </div> }
        </Popover>
      </div>
    );
  }
}

const ItemActions = ({ quantity }) => {
  return (
    <div> Quantity: {quantity}</div>
  )
}

const mapStateToProps = (store) => ({
  cart: store.cart,
  items: store.cart.items
});

const mapDispatchToProps = (dispatch) => ({ dispatch })

const Cart = connect(mapStateToProps, mapDispatchToProps)(ItemCart);

export default Cart;
