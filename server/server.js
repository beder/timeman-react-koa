import Koa from 'koa'

import routes from './routes'

const app = new Koa()

app
  .use(routes.routes())
  .use(routes.allowedMethods())

app.listen(3000, '0.0.0.0')
