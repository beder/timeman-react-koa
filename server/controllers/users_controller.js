import User from '../models/user'

export const create = (ctx, next) => {
  ctx.body = 'create user'
}

export const index = async (ctx, next) => {
  ctx.body = await User.fetchAll()
}

export const show = async (ctx, next) => {
  ctx.body = await User.forge({'id': ctx.params.id}).fetch()
}

export const update = async (ctx, next) => {
  ctx.body = await User.forge({'id': ctx.params.id}).fetch()
}

export const _delete = async (ctx, next) => {
  ctx.body = await User.forge({'id': ctx.params.id}).fetch()
}
