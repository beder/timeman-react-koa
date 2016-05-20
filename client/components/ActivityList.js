import React from 'react';
import Activity from './Activity'

export default class ActivityList extends React.Component {
  render() {
    const user = this.props.users.find((user) => user.id === this.props.params.user_id)
    const activities = this.props.activities.filter((activity) => activity.user_id === user.id)
    return (
      <div>
        <h2>
          Activities
        </h2>
        {
          activities.map((activity, i) =>
            <Activity
              {...this.props}
              key={i}
              i={i}
              activity={activity}
              user={user}
              onDelete={() => this.props.deleteActivity.bind(null, i)} />
          )
        }
      </div>
    )
  }
}
