
exports.seed = (knex, Promise) => {

  return Promise.join(
    // Deletes ALL existing entries
    knex('activities').del(),
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      hours_per_day: 8,
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('users').insert({
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      hours_per_day: 8,
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('users').insert({
      id: 3,
      name: 'Joe Bloggs',
      email: 'joe@example.com',
      hours_per_day: 8,
      role: 'user',
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('users').insert({
      id: 4,
      name: 'Johnnie Smith',
      email: 'johnnie@example.com',
      hours_per_day: 8,
      role: 'user',
      created_at: new Date(),
      updated_at: new Date()
    })
  )

}
