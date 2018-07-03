import React from 'react';
import { connect } from 'react-redux';
import SearchDropdown from './SearchAutocomplete';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './AppBarStyles.css';

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
            <NavLink href="/products">About</NavLink>
          </NavItem>

          <NavItem>
            <NavLink>Cart</NavLink>
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

AppBar = connect()(AppBar);

export default AppBar;
