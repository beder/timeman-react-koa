import bookshelf from '../services/bookshelf'

const User = bookshelf.Model.extend({
  tableName: 'users'
})

export default User
