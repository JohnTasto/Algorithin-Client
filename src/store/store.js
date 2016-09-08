import { throttle } from 'lodash'

import { loadState, saveState, filter } from './localStorage'


let configureStore

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod')
} else {
  configureStore = require('./configureStore.dev')
}

const store = configureStore(loadState())

store.subscribe(throttle(() => {
  saveState(filter(store.getState()))
}, 1000))

export default store
