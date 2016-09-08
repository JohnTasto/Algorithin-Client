import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { Link } from 'react-router'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


class Signin extends Component {

  static propTypes = {
    signinUser: PropTypes.func,
    errorMessage: PropTypes.string,
    handleSubmit: PropTypes.func,
    fields: PropTypes.object,
  }

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password })
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input id="email" type="email" {...email} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input id="password" type="password" {...password} />
        </FormGroup>
        {this.renderAlert()}
        <Button action="submit" color="primary">Sign in</Button>
        <Link to="/signup">Sign up</Link> 
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(Signin)
