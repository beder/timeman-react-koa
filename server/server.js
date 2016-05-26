import Koa from 'koa'
import Kcors from 'kcors'

import routes from './routes'

const app = new Koa()

app
  .use(new Kcors())
  .use(routes.routes())
  .use(routes.allowedMethods())

app.listen(3000, '0.0.0.0')
