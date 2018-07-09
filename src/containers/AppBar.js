import React from 'react';
import SearchDropdown from './SearchAutocomplete';
import Cart from './Cart';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import styles from './AppBarStyles.css';

export default class AppBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
    return (

      <Navbar className={styles.header} color="light" light expand="sm">
        <NavbarBrand href="/">Store</NavbarBrand>
        <Nav className="ml-auto" navbar>

          <NavItem>
            <SearchDropdown />
          </NavItem>
        </Nav>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>

          <Nav className="ml-auto" navbar>

          <NavItem>
            <NavLink href="/about">
              <Button color="link">About</Button>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/products">
              <Button color="link" onClick={this.toggle}>Products</Button>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink><Cart /></NavLink>
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
