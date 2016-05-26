import { FETCH_USER_ACTIVITIES_SUCCESS, FETCH_ACTIVITY_SUCCESS } from '../actions/actionCreators'

const activities = (state = [], action) => {
  switch(action.type) {
    case FETCH_USER_ACTIVITIES_SUCCESS:
      return [
        ...state.filter(oldActivity => !action.activities.find(newActivity => newActivity.id === oldActivity.id)),
        ...action.activities
      ]
    case FETCH_ACTIVITY_SUCCESS:
      return [
        ...state.filter(oldActivity => oldActivity.id !== action.activity.id),
        action.activity
      ]
    default:
      return state
  }
}

export default activities
