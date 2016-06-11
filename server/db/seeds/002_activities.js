
exports.seed = (knex, Promise) => {

  return Promise.join(
    // Deletes ALL existing entries
    knex('activities').del(),

    // Inserts seed entries
    knex('activities').insert({
      id: 1,
      name: 'Add advanced search functionality',
      activity_date: '2016-05-01',
      hours: 4,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('activities').insert({
      id: 2,
      name: 'More distinct way of deleting task',
      activity_date: '2016-05-01',
      hours: 4,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('activities').insert({
      id: 3,
      name: 'Some way to get notified when task in to-do is assigned to you',
      activity_date: '2016-05-03',
      hours: 8,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('activities').insert({
      id: 4,
      name: 'Possible bug IE11',
      activity_date: '2016-05-04',
      hours: 8,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('activities').insert({
      id: 5,
      name: 'Card types legend',
      activity_date: '2016-05-02',
      hours: 2,
      user_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('activities').insert({
      id: 6,
      name: 'Blocked cards',
      activity_date: '2016-05-06',
      hours: 3,
      user_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    })
  )

}
