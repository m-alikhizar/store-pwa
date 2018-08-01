import React from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';
import Image from './Image';

const Item = ({
  img, name, price, id, children
}) => (
  <div className="product-item" style={{ padding: '15px' }}>
    <Media>
      <Image src={img} />
      <Media body style={{ marginLeft: '15px' }}>
        <Media heading>
          <strong>{name}</strong>
        </Media>
        <div>Price: ${price}</div>
        {children}
      </Media>
    </Media>
  </div>
);

Item.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
export default Item;
