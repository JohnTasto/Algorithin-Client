import React, { Component, PropTypes } from 'react'

import Header from './header'

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
