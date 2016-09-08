/* eslint-disable import/default */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

import RequireAuth from './components/auth/require_auth'
import Landing from './components/landing'
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Feature from './components/feature'
import App from './components/app'
import Welcome from './components/welcome'
import { AUTH_USER } from './actions/types'

import './styles/index.scss'

require('./favicon.ico')


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


const token = localStorage.getItem('token')

if (token) {
  store.dispatch({ type: AUTH_USER })
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Landing}>
        <IndexRoute component={Signin} />
        <Route path="/signup" component={Signup} />
      </Route>
      <Route path="/app" component={RequireAuth(App)}>
        <IndexRoute component={Welcome} />
        <Route path="/feature" component={Feature} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'))
