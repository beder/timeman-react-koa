import React from 'react';
import User from './User'

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Users
        </h2>
        {
          this.props.users.map((user, i) =>
            <User
              {...this.props}
              key={i}
              i={i}
              user={user}
              onDelete={() => this.props.deleteUser.bind(null, i)} />
          )
        }
      </div>
    )
  }
}
