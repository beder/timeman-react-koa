import React from 'react';
import Activity from './Activity'

export default class ActivityList extends React.Component {
  componentDidMount() {
    const { loadUserActivities, params: { user_id } } = this.props
    loadUserActivities(user_id)
  }

  render() {
    const { error, requests: { activities: { successful: hasFetchedActivities, inProgress: isFetchingActivities } }, activities, deleteActivity, params: { user_id } } = this.props

    const activityComponents = (() => {
      if (hasFetchedActivities) {
        return activities.filter((activity) => activity.user_id.toString() === user_id).map((activity, i) =>
          <Activity
            key={i}
            i={i}
            activity={activity}
            onDelete={() => this.props.deleteActivity.bind(null, i)} />
        )
      }
      else {
        return null
      }
    })()

    const notificationComponent = (() => {
      if (isFetchingActivities) {
        return <p>Fetching activities</p>
      }
      else if (error && error.hasOwnProperty('message')) {
        return <p>{error.message}</p>
      }
      else if (hasFetchedActivities) {
        return <p>Activities fetched!</p>
      }
      else {
        return null
      }
    })()

    return (
      <div>
        <h2>
          Activities
        </h2>
        { notificationComponent }
        { activityComponents }
      </div>
    )
  }
}
