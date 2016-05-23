import users from '../data/users'

export const create = (ctx, next) => {
  ctx.body = 'create user'
}

export const index = (ctx, next) => {
  ctx.body = users
}

export const show = (ctx, next) => {
  ctx.body = users.find(userr => userr.id === ctx.params.id)
}

export const update = (ctx, next) => {
  ctx.body = users.find(userr => userr.id === ctx.params.id)
}

export const _delete = (ctx, next) => {
  ctx.body = users.find(userr => userr.id === ctx.params.id)
}
