import React from 'react'
import Item from './Item';
import { Alert, Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { addToCart, sort } from '../actions';
import { parse, stringify } from 'query-string';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      dropdownOpen: false,
      key: 'price'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onDropdownClick(key) {
    const search = parse(location.search);

    search.key = key;
    search.order = this.state.order;

    location.search = stringify(search);
  }

  onButtonClick(val) {
    const search = parse(location.search);

    search.key = this.state.key;
    search.order = val;

    location.search = stringify(search);
  }

  componentDidMount(props) {
    const search = parse(location.search);
    const { key, order } = search;

    if(key && order) {


      this.setState({ key, order });
      this.props.dispatch(sort(order, key));
    }
  }

  render() {
    const { itemlist, meta, dispatch } = this.props;

    return (
      <div style={{margin: '90px auto'}}>
        <Alert color={'light'} style={{textAlign: 'right'}}>
          <ButtonGroup>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret outline color="secondary">{meta.key}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.onDropdownClick('price')}>Price</DropdownItem>
                <DropdownItem onClick={() => this.onDropdownClick('name')}>Name</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button outline color="secondary" onClick={() => this.onButtonClick('ASC')} active={meta.order === 'ASC'} style={{zIndex: 0}}>↑</Button>
            <Button outline color="secondary" onClick={() => this.onButtonClick('DESC')} active={meta.order === 'DESC'} style={{zIndex: 0}}>↓</Button>
          </ButtonGroup>
        </Alert>
        <div className="row">
          {itemlist.map(item =>
            <div className="col-lg-4 col-md-6  col-xs-6" key={item.id}>
              <div className="mb-4" style={style}>
                <Item {...item} dispatch={dispatch} children={ <ItemActionBar dispatch={ dispatch } id={item.id}/>} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const style = {
  borderRadius: '3px',
  border: '1px solid #e0e0e0',
  background: '#f7f7f7'
};

const ItemActionBar = ({ dispatch, id }) => {
  return (
    <div style={{marginTop: '10px'}}>
      <Button style={{marginRight: '10px'}} size="sm" onClick={() => dispatch(addToCart({id, quantity: 1}))} color="primary">Add to Cart</Button>
      <Link to={`/product/${id}`}>Details</Link>
    </div>
  )
}

export default ItemList
