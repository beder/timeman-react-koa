import React from 'react';
import User from './User'

export default class UserCard extends React.Component {
  render() {
    const i = this.props.users.findIndex((o) => o.id === this.props.params.id)
    const user = this.props.users[i]
    const onDelete = () => this.props.deleteUser.bind(null, i)

    return (
      <div>
        <User
          {...this.props}
          key={i}
          i={i}
          user={user}
          onDelete={onDelete} />
      </div>
    )
  }
}
