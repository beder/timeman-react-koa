
exports.up = (knex, Promise) => {

  return Promise.all([

    knex.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.integer('hours_per_day')
      table.string('role')
      table.timestamps()
    }),

    knex.schema.createTable('activities', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.dateTime('activity_date')
      table.integer('hours')
      table.integer('user_id')
           .references('id')
           .inTable('users')
      table.timestamps()
    })

  ])

}

exports.down = (knex, Promise) => {

  return Promise.all([
    knex.schema.dropTable('activities'),
    knex.schema.dropTable('users')
  ])

}
