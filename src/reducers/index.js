import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'

import authReducer from './auth_reducer'


const rootReducer = combineReducers({
  routing,
  form,
  auth: authReducer,
})

export default rootReducer
