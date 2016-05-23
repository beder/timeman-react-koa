import router from 'koa-router'

import * as activitiesController from './controllers/activities_controller'
import * as usersController from './controllers/users_controller'

const routes = router()
  .post('/activities', activitiesController.create)
  .get('/activities', activitiesController.index)
  .get('/activities/:id', activitiesController.show)
  .put('/activities/:id', activitiesController.update)
  .del('/activities/:id', activitiesController._delete)
  .get('/activities/:id', activitiesController.show)
  .post('/users', usersController.create)
  .get('/users', usersController.index)
  .get('/users/:id', usersController.show)
  .put('/users/:id', usersController.update)
  .del('/users/:id', usersController._delete)
  .get('/users/:id', usersController.show)

export default routes
