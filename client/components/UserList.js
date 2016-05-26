import React from 'react';
import User from './User'

export default class UserList extends React.Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    const { error, requests: { users: { successful: hasFetchedUsers, inProgress: isFetchingUsers } }, users, deleteUser } = this.props

    const userComponents = (() => {
      if (hasFetchedUsers) {
        return users.map((user, i) =>
          <User
            key={i}
            i={i}
            user={user}
            onDelete={() => deleteUser.bind(null, i)} />
        )
      }
      else {
        return null
      }
    })()

    const notificationComponent = (() => {
      if (isFetchingUsers) {
        return <p>Fetching users</p>
      }
      else if (error && error.hasOwnProperty('message')) {
        return <p>{error.message}</p>
      }
      else if (hasFetchedUsers) {
        return <p>Users fetched!</p>
      }
      else {
        return null
      }
    })()

    return (
      <div>
        <h2>
          Users
        </h2>
        { notificationComponent }
        { userComponents }
      </div>
    )
  }
}
