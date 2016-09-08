import React, { Component, PropTypes } from 'react'
import { Container } from 'reactstrap'


export default class Landing extends Component {

  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div style={{
          width: '100vw',
          height: '100vh',
          background: 'url("./components/auth/bg.jpg") center/cover',
      }}>
        <Container fluid={true} className="landing">
          <div style={{
              paddingTop: '54px',
              width: '320px',
              margin: 'auto',
          }}>
            <h1>Algorithin</h1>
            {this.props.children}
          </div>
        </Container>
      </div>
    )
  }
}
