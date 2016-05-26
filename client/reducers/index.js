import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import activities from './activities'
import error from './error'
import requests from './requests'
import users from './users'

const rootReducer = combineReducers({
  activities,
  error,
  requests,
  routing: routerReducer,
  users
})

export default rootReducer
