/* eslint-disable import/default */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/app'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import Feature from './components/feature'
import RequireAuth from './components/auth/require_auth'
import Welcome from './components/welcome'
import { AUTH_USER } from './actions/types'

import './styles/index.scss' // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

require('./favicon.ico') // Tell webpack to load favicon.ico


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


const token = localStorage.getItem('token')
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER })
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'))
