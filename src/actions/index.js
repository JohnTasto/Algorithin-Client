import axios from 'axios'
import { browserHistory } from 'react-router'

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
} from './types'

const ROOT_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        const token = response.data.token
        dispatch({ type: AUTH_USER, email, token })
        browserHistory.push('/app/feature')
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser({ email, password }) {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        const token = response.data.token
        dispatch({ type: AUTH_USER, email, token })
        browserHistory.push('/app/feature')
      })
      .catch(response => dispatch(authError(response.data.error)))
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}

export function signoutUser() {
  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return (dispatch, getState) => {
    const token = getState().auth.token
    axios
      .get(ROOT_URL, {
        headers: { authorization: token },
      })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message,
        })
      })
  }
}
