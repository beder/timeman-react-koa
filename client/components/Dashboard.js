import React from 'react';
import { Link } from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Dashboard
        </h2>
        <div>
          <Link to={`/users`}>Users</Link>
        </div>
      </div>
    )
  }
}
