import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App          from './components/App'
import Dashboard    from './components/Dashboard'
import UserList     from './components/UserList'
import UserCard     from './components/UserCard'
import ActivityList from './components/ActivityList'
import ActivityCard from './components/ActivityCard'

import store, { history } from './store'

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}></IndexRoute>
        <Route path="/users" component={UserList}></Route>
        <Route path="/users/:id" component={UserCard}></Route>
        <Route path="/users/:user_id/activities" component={ActivityList}></Route>
        <Route path="/activities/:id" component={ActivityCard}></Route>
      </Route>
    </Router>
  </Provider>
)

export default routes
