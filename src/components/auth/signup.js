import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


class Signup extends Component {

  static propTypes = {
    signupUser: PropTypes.func,
    errorMessage: PropTypes.string,
    handleSubmit: PropTypes.func,
    fields: PropTypes.object,
  }

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps)
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
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props

    return (
      <Form
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        style={{ width: '320px', margin: 'auto'}}
      >
        <FormGroup>
        <Label for="email">Email:</Label>
          <Input id="email" type="email" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input id="password" type="password" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="passwordConfirm">Confirm password:</Label>
          <Input id="passwordConfirm" type="password" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </FormGroup>
        {this.renderAlert()}
        <Button action="submit" color="primary">Sign up!</Button>
      </Form>
    )
  }
}

function validate(formProps) {
  const errors = {}

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation'
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate,
}, mapStateToProps, actions)(Signup)
