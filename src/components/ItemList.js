import React from 'react'
import Item from './Item';

const ItemList = ({ items, onToggleProp }) => {
  return (
    <div className="row text-center text-lg-left">
      {items.map(item =>
        <Item {...item} onItemClick={() => { onToggleProp(item.id, 'expanded')}}></Item>
      )}
    </div>
  )
}

export default ItemList
