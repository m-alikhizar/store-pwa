import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardLink } from 'reactstrap';

const Item = ({ img, name, price, onItemClick }) => {
  return (
    <div className="col-lg-3 col-md-4 col-xs-6" style={{padding: '15px'}}>
      <Card className="d-block mb-4 h-100">
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
        <img onClick={onItemClick} width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardLink href="#">Details</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default Item
