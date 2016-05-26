import React from 'react';
import { Link } from 'react-router';

export default class Activity extends React.Component {
  render() {
    const { activity, i, onDelete } = this.props

    return (
      <div>
        <h3>
          <Link to={`/activities/${activity.id}`}>
            {activity.name}
          </Link>
        </h3>
        <div>
          <button onClick={onDelete()}>Delete</button>
        </div>
      </div>
    )
  }
}
