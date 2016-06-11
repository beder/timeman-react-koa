import bookshelf from '../services/bookshelf'

const Activity = bookshelf.Model.extend({
  tableName: 'activities'
})

export default Activity
