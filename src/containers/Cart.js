import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { NavLink, Popover, PopoverBody } from 'reactstrap';
import Item from '../components/Item';
import { checkout } from '../actions';
import styles from '../styles/Cart.css';

@connect(
  store => ({
    cart: store.cart,
    items: store.cart.items
  }),
  dispatch => ({ dispatch })
)
export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {}

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

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div onMouseEnter={this.onMouseEnter}>
        <div id="popover-cart" onClick={this.toggle} onMouseLeave={this.onMouseLeave}>
          <div className={styles.bag}>
            <i>{this.props.cart.count}</i>
          </div>
        </div>
        <Popover
          className={styles.popover}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="popover-cart"
          toggle={this.toggle}
        >
          <div className={styles.overlay} />
          <PopoverBody className={styles.body}>
            {this.props.items
              && this.props.items.map(item => (
                <Item key={item.id} {...item} children={<ItemActions quantity={item.quantity} />} />
              ))}
            {!this.props.items.length && ' ITEMS'}
          </PopoverBody>

          {this.props.items.length != 0 && (
            <div className={styles.actions}>
              <span className="total-price">
                TOTAL{' '}
                <NumberFormat
                  displayType="text"
                  value={this.props.cart.price}
                  thousandSeparator
                  prefix="$"
                />
              </span>
              <NavLink
                className="check-out"
                size="sm"
                onClick={() => this.props.dispatch(checkout(this.props.items))}
                href="https://google.com"
              >
                Secure Checkout
              </NavLink>
            </div>
          )}
        </Popover>
      </div>
    );
  }
}

const ItemActions = ({ quantity }) => (
  <div>
    {' '}
    Quantity:
    {quantity}
  </div>
);
