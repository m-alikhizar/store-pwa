import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row } from 'reactstrap';

class AppBar extends React.Component {

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
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">petshop</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
          </NavItem>

          <NavItem>
            <NavLink>Cart</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

AppBar = connect()(AppBar);

export default AppBar;
