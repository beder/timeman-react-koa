import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USER_ACTIVITIES_REQUEST, FETCH_USER_ACTIVITIES_SUCCESS, FETCH_USER_ACTIVITIES_FAILURE } from '../actions/actionCreators'

const initialState = {
  users: {
    inProgress: false,
    successful: false,
    failed: false
  },
  activities: {}
}

const requests = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: true
        }
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: false,
          successful: true,
          failed: false
        }
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: false,
          successful: false,
          failed: true
        }
      }
    case FETCH_USER_ACTIVITIES_REQUEST:
      return {
        ...state,
        activities: {
          ...state.activities,
          inProgress: true
        }
      }
    case FETCH_USER_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: {
          ...state.activities,
          inProgress: false,
          successful: true,
          failed: false
        }
      }
    case FETCH_USER_ACTIVITIES_FAILURE:
      return {
        ...state,
        activities: {
          ...state.activities,
          inProgress: false,
          successful: false,
          failed: true
        }
      }
    default:
      return state
  }
}

export default requests
