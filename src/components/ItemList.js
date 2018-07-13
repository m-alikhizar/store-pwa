import React from 'react';
import {
  Alert,
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink
} from 'reactstrap';
import { parse, stringify } from 'query-string';
import PropTypes from 'prop-types';
import { addToCart, setFilters } from '../actions';
import Item from './Item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      key: 'price'
    };

    this.toggle = this.toggle.bind(this);
    this.onDropdownClick = this.onDropdownClick.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onDropdownClick(key) {
    const search = parse(location.search);

    search.key = key;
    search.order = this.state.order || 'ASC';

    location.search = stringify(search);
  }

  onButtonClick(val) {
    const search = parse(location.search);

    search.key = this.state.key;
    search.order = val;

    location.search = stringify(search);
  }

  query() {
    const search = parse(location.search);
    const { key, order } = search;

    if (key && order) {
      this.setState({ key, order });
      this.props.dispatch(setFilters({ order, key }));
    }
  }

  componentDidMount() {
    this.query();
  }

  render() {
    const { itemlist, meta, dispatch } = this.props;

    return (
      <div style={{ margin: '90px auto 0 auto' }}>
        <Alert color="light" style={{ textAlign: 'right' }}>
          <ButtonGroup>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret outline color="secondary">
                {meta.key}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.onDropdownClick('price')}>Price</DropdownItem>
                <DropdownItem onClick={() => this.onDropdownClick('name')}>Name</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button
              outline
              color="secondary"
              onClick={() => this.onButtonClick('ASC')}
              active={meta.order === 'ASC'}
              style={{ zIndex: 0 }}
            >
              ↑
            </Button>
            <Button
              outline
              color="secondary"
              onClick={() => this.onButtonClick('DESC')}
              active={meta.order === 'DESC'}
              style={{ zIndex: 0 }}
            >
              ↓
            </Button>
          </ButtonGroup>
        </Alert>
        <div className="row">
          {itemlist.map(item => (
            <div className="col-lg-4 col-md-6  col-xs-6 product-item" key={item.id}>
              <div className="mb-4" style={style}>
                <Item
                  {...item}
                  dispatch={dispatch}
                  children={<Actions dispatch={dispatch} item={item} />}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const style = {
  borderRadius: '3px',
  border: '1px solid #e0e0e0',
  background: '#f7f7f7'
};

ItemList.propTypes = {
  itemlist: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const Actions = ({ dispatch, item }) => (
  <div style={{ marginTop: '10px' }}>
    <Button
      style={{ marginRight: '10px' }}
      size="sm"
      onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
      color="primary"
      className="add-to-cart"
    >
      Add to Cart
    </Button>
    <NavLink href={`/product/${item.id}`} style={{ display: 'inline' }}>
      Details
    </NavLink>
  </div>
);

export default ItemList;
