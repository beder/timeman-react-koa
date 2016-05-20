import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './users'
import activities from './activities'

const rootReducer = combineReducers({
  users,
  activities,
  routing: routerReducer
})

export default rootReducer
