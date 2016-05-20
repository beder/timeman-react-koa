import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component {
  render() {
    const { user, i, onDelete } = this.props

    return (
      <div>
        <h3>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </h3>
        <button onClick={onDelete()}>Delete</button>
      </div>
    )
  }
}
