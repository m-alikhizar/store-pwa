import React from 'react'
import Item from './Item';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions';

const ItemList = ({ items, dispatch }) => {
  return (
    <div style={{marginTop: '90px'}} className="row text-left">
      {items.map(item =>
        <Item {...item} key={item.id} dispatch={dispatch}
          children={ <ItemActionBar dispatch={ dispatch } id={item.id}/>}
        >
        </Item>
      )}
    </div>
  )
}

const ItemActionBar = ({ dispatch, id }) => {
  return (
    <div>
      <Button size="sm" onClick={() => dispatch(addToCart({id, quantity: 1}))} color="primary">Add to Cart</Button>
      {'    '}
      <Link to={`/product/${id}`}>Details</Link>
    </div>
  )
}

export default ItemList
