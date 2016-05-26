import activities from '../data/activities'

export const create = (ctx, next) => {
  ctx.body = 'create activity'
}

export const index = (ctx, next) => {
  ctx.body = activities.filter(activity => activity.user_id === ctx.params.user_id)
}

export const show = (ctx, next) => {
  ctx.body = activities.find(activity => activity.id === ctx.params.id)
}

export const update = (ctx, next) => {
  ctx.body = activities.find(activity => activity.id === ctx.params.id)
}

export const _delete = (ctx, next) => {
  ctx.body = activities.find(activity => activity.id === ctx.params.id)
}
