import React from 'react';
import { Container, Col, Row, Button, Jumbotron } from 'reactstrap';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import ProductDetails from '../containers/ProductDetails';
import Products from '../containers/Products';
import Header from './Header';

const App = () => {
  return (
    <Container fluid={true}>
      <Route path='/' component={Header}/>
      <Row>
        <Col lg={12}>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/product/:id' component={ProductDetails}/>
            <Route component={NotFound}/>
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

const NotFound = () => {
  return (
    <Container fluid={true}>
      <Jumbotron>
        <h1 className="display-3">404 Not Found!</h1>
        <p className="lead">Page Not Found!</p>
        <hr className="my-2" />
        <p>You can redirect to Home.</p>
        <p className="lead">
          <Link to='/products'>Home</Link>
        </p>
      </Jumbotron>
    </Container>
  )
}


export default App
