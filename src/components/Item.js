import React from 'react';
import { Button, Media} from 'reactstrap';
import { Link } from 'react-router-dom';

const Item = ({ img, name, price, id, onItemClick }) => {
  return (
    <div className="col-lg-8 col-md-8 col-xs-12" style={{padding: '15px', margin: 'auto'}}>

      <Media>
        <Media left top href="#" style={{marginRight: '15px'}}>
          <Media onClick={onItemClick} object src={img} alt="placeholder image cap" style={{width: '128px'}} />
        </Media>
        <Media body>
          <Media heading>{name}</Media>

          <div>Price: {price} AED</div>

          <div>
            <Button size="sm" color="primary">Add to Cart</Button>
            {'    '}
            <Link to={`/product/${id}`}>Details</Link>
          </div>

        </Media>
      </Media>
    </div>
  )
}

export default Item
