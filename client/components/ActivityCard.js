import React from 'react';
import Activity from './Activity'

export default class ActivityCard extends React.Component {
  render() {
    const i = this.props.activities.findIndex((o) => o.id === this.props.params.id)
    const activity = this.props.activities[i]
    const user = this.props.users.find((user) => user.id === activity.user_id)
    const onDelete = () => this.props.deleteActivity.bind(null, i)

    return (
      <div>
        <Activity
          {...this.props}
          key={i}
          i={i}
          activity={activity}
          user={user}
          onDelete={onDelete} />
      </div>
    )
  }
}
