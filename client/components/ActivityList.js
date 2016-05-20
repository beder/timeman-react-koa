import React from 'react';
import Activity from './Activity'

export default class ActivityList extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Activities
        </h2>
        {
          this.props.activities.map((activity, i) =>
            <Activity
              {...this.props}
              key={i}
              i={i}
              activity={activity}
              onDelete={() => this.props.deleteActivity.bind(null, i)} />
          )
        }
      </div>
    )
  }
}
