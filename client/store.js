import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

import users from './data/users'
import activities from './data/activities'

const defaultState = {
  users,
  activities
}

const store = createStore(rootReducer, defaultState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
