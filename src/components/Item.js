import React from 'react';
import { Media} from 'reactstrap';

const Item = ({ img, name, price, id, dispatch, children }) => {
  return (
    <div style={{padding: '15px'}}>
      <Media>
        <Media left top href="#" style={{marginRight: '15px'}}>
          <Media object src={img} alt="placeholder image cap" style={{width: '128px'}}/>
        </Media>
        <Media body>
          <Media heading><strong>{name}</strong></Media>
          <div>Price: {price} AED</div>
          {children}
        </Media>
      </Media>
    </div>
  )
}

export default Item
