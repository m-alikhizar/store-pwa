import React from 'react';
import { Media} from 'reactstrap';

const Item = ({ img, name, price, id, dispatch, children }) => {
  return (
    <div className="col-lg-8 col-md-8 col-xs-12" style={{padding: '15px', margin: 'auto'}}>

      <Media>
        <Media left top href="#" style={{marginRight: '15px'}}>
          <Media object src={img} alt="placeholder image cap" style={{width: '128px'}} />
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
