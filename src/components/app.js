import React, { Component, PropTypes } from 'react'
import { Container } from 'reactstrap'

import Header from './header'


export default class App extends Component {

  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <Container fluid={true}>
        <Header />
        <div style={{marginTop: '54px'}}>
          {this.props.children}
        </div>
      </Container>
    )
  }
}
