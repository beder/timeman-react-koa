import Knex from 'knex'
import Bookshelf from 'bookshelf'
import configuration from '../knexfile'

const knex = Knex(configuration[process.env.NODE_ENV])

const bookshelf = Bookshelf(knex)

export default bookshelf
