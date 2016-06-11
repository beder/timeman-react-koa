import React from 'react';
import User from './User'

export default class UserCard extends React.Component {
  componentDidMount() {
    const { loadUser, params: { id } } = this.props
    loadUser(id)
  }

  render() {
    const { users, params: { id }, deleteUser } = this.props

    const i = users.findIndex((user) => user.id.toString() === id)
    const userComponent = (() => {
      if (i !== -1) {
        const user = users[i]
        const onDelete = () => deleteUser.bind(null, user.id)
        return (
          <User
            key={i}
            i={i}
            user={user}
            onDelete={onDelete} />
        )
      }
      else {
        return null
      }
    })()

    return (
      <div>
      { userComponent }
      </div>
    )
  }
}
