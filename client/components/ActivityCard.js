import React from 'react';
import Activity from './Activity'

export default class ActivityCard extends React.Component {
  componentDidMount() {
    const { loadActivity, params: { id } } = this.props
    loadActivity(id)
  }

  render() {
    const { activities, params: { id }, deleteActivity } = this.props
    const i = activities.findIndex((o) => o.id === id)

    const activityComponent = (() => {
      if (i !== -1) {
        const activity = activities[i]
        const onDelete = () => deleteActivity.bind(null, i)
        return (
          <Activity
            key={i}
            i={i}
            activity={activity}
            onDelete={onDelete} />
        )
      }
      else {
        return null
      }
    })()

    return (
      <div>
      { activityComponent }
      </div>
    )
  }
}
