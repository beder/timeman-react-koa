import Activity from '../models/activity'

export const create = (ctx, next) => {
  ctx.body = 'create activity'
}

export const index = async (ctx, next) => {
  ctx.body = await Activity.query({ where: { 'user_id': ctx.params.user_id } }).fetchAll()
}

export const show = async (ctx, next) => {
  ctx.body = await Activity.forge({'id': ctx.params.id}).fetch()
}

export const update = async (ctx, next) => {
  ctx.body = await Activity.forge({'id': ctx.params.id}).fetch()
}

export const _delete = async (ctx, next) => {
  ctx.body = await Activity.forge({'id': ctx.params.id}).fetch()
}
