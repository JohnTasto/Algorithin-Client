import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import Gravatar from 'react-gravatar'

import * as actions from '../actions'


class Header extends Component {

  static propTypes = {
    email: PropTypes.string,
    signoutUser: PropTypes.func,
  }

  renderLinks() {
    return [
      <NavItem key={1}>
        <NavLink tag={Link} to="/" onClick={this.props.signoutUser}>Sign Out</NavLink>
      </NavItem>,
      <NavItem key={2}>
        <Gravatar email={this.props.email} https size={38} />
      </NavItem>,
    ]
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
    email: state.auth.email,
  }
}

export default connect(mapStateToProps, actions)(Header)
