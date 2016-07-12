import Knex from 'knex'
import configuration from '../knexfile'

const { connection: { database, ...allButDatabase }, ...allButConnection } = configuration[process.env.NODE_ENV]

const createDatabaseConfig = { connection: allButDatabase, ...allButConnection }

const command = `CREATE DATABASE ${database}`

console.log(command)

const knex = Knex(createDatabaseConfig)

knex.raw(command)
    .then((resp) => {
      console.log('Database successfuly created')
      process.exit(0)
    })
    .catch((error) => {
      console.log(error)
      console.log('Database creation failed')
      process.exit(1)
    })
