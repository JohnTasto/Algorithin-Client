import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import Gravatar from 'react-gravatar'


class Header extends Component {

  static propTypes = {
    authenticated: PropTypes.bool,
    email: PropTypes.string,
  }

  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return [
        <NavItem key={1}>
          <NavLink tag={Link} to="/signout">Sign Out</NavLink>
        </NavItem>,
        <NavItem key={2}>
          <Gravatar email={this.props.email} https size={38} />
        </NavItem>,
      ]
    } else {
      // show a link to sign in or sign up
      return [
        <NavItem key={1}>
          <NavLink tag={Link} to="/signin">Sign In</NavLink>
        </NavItem>,
        <NavItem key={2}>
          <NavLink tag={Link} to="/signup">Sign Up</NavLink>
        </NavItem>,
      ]
    }
  }

  render() {
    return (
      <Navbar color="inverse" dark fixed="top">
        <NavLink tag={Link} to="/" className="navbar-brand">Algorithin</NavLink>
        <Nav className="pull-xs-right" navbar>
          {this.renderLinks()}
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    email: state.auth.email,
  }
}

export default connect(mapStateToProps)(Header)
