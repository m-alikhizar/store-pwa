import React from 'react'

// import VisibleItemList from '../containers/VisibleItemList'
// import AddItem from '../containers/AddItem'
// import PropTypes from 'prop-types'

import { Container, Col, Row } from 'reactstrap';

import Products from '../containers/Products';
import AppBar from '../containers/AppBar';

const App = () => {
  return (
    <Container fluid={true}>
      <AppBar />

      <Row>
        <Col lg="12" xs="12">
          <Products />
        </Col>
      </Row>

    </Container>
  )
}

export default App
