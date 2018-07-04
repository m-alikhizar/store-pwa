import React from 'react'
import Item from './Item';

const ItemList = ({ items, onToggleProp }) => {
  return (
    <div style={{marginTop: '90px'}} className="row text-left">
      {items.map(item =>
        <Item {...item} key={item.id} onItemClick={() => { onToggleProp(item.id, 'expanded')}}></Item>
      )}
    </div>
  )
}

export default ItemList
