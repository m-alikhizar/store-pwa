import React from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';

const Item = ({
  img, name, price, id, children
}) => (
  <div className="product-item" style={{ padding: '15px' }}>
    <Media>
      <Media left top href="#" style={{ marginRight: '15px' }}>
        <Media object src={img} alt="placeholder image cap" style={{ width: '128px' }} />
      </Media>
      <Media body>
        <Media heading>
          <strong>{name}</strong>
        </Media>
        <div>Price: {price} AED</div>
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
