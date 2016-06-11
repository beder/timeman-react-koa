import * as Api from '../middleware/api'

export const loadUsers = () => {
  return (dispatch, getState) => {
    const hasFetchedUsers = getState().requests.users.successful
    if (hasFetchedUsers)
      return Promise.resolve()

    return dispatch(fetchUsers())
  }
}

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest())

    return Api.fetchUsers()
    .then(response => {
      if (response.ok) {
        response.json().then(
          users => dispatch(fetchUsersSuccess(users))
        )
      }
      else {
        dispatch(fetchUsersFailure({ message: response.statusText }))
      }
    })
    .catch(error => dispatch(fetchUsersFailure({ message: error.message })))
  }
}

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  }
}

export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error
  }
}

export const loadUser = (userId) => {
  return (dispatch, getState) => {
    const user = getState().users.find(user => user.id.toString() === userId)
    if (user)
      return Promise.resolve()

    return dispatch(fetchUser(userId))
  }
}

const fetchUser = (userId) => {
  return dispatch => {
    dispatch(fetchUserRequest(userId))

    return Api.fetchUser(userId)
    .then(response => {
      if (response.ok) {
        response.json().then(
          user => dispatch(fetchUserSuccess(userId, user))
        )
      }
      else {
        dispatch(fetchUsersFailure(userId, { message: response.statusText }))
      }
    })
    .catch(error => dispatch(fetchUsersFailure(userId, { message: error.message })))
  }
}

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'

const fetchUserRequest = (userId) => {
  return {
    type: FETCH_USER_REQUEST,
    userId
  }
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

const fetchUserSuccess = (userId, user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
    userId
  }
}

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserFailure = (userId, error) => {
  return {
    type: FETCH_USER_FAILURE,
    error,
    userId
  }
}

export const loadUserActivities = (userId) => {
  return (dispatch, getState) => {
    const activities = getState().activities.filter(activity => activity.user_id.toString() === userId)
    if (activities.length > 0)
      return Promise.resolve()

    return dispatch(fetchUserActivities(userId))
  }
}

const fetchUserActivities = (userId) => {
  return dispatch => {
    dispatch(fetchUserActivitiesRequest(userId))

    return Api.fetchUserActivities(userId)
    .then(response => {
      if (response.ok) {
        response.json().then(
          activities => dispatch(fetchUserActivitiesSuccess(userId, activities))
        )
      }
      else {
        dispatch(fetchUserActivitiesFailure(userId, { message: response.statusText }))
      }
    })
    .catch(error => dispatch(fetchUserActivitiesFailure(userId, { message: error.message })))
  }
}

export const FETCH_USER_ACTIVITIES_REQUEST = 'FETCH_USER_ACTIVITIES_REQUEST'

const fetchUserActivitiesRequest = (userId) => {
  return {
    type: FETCH_USER_ACTIVITIES_REQUEST,
    userId
  }
}

export const FETCH_USER_ACTIVITIES_SUCCESS = 'FETCH_USER_ACTIVITIES_SUCCESS'

const fetchUserActivitiesSuccess = (userId, activities) => {
  return {
    type: FETCH_USER_ACTIVITIES_SUCCESS,
    userId,
    activities
  }
}

export const FETCH_USER_ACTIVITIES_FAILURE = 'FETCH_USER_ACTIVITIES_FAILURE'

const fetchUserActivitiesFailure = (userId, error) => {
  return {
    type: FETCH_USER_ACTIVITIES_FAILURE,
    userId,
    error
  }
}

export const loadActivity = (id) => {
  return (dispatch, getState) => {
    const activity = getState().activities.find(activity => activity.id.toString() === id)
    if (activity)
      return Promise.resolve()

    return dispatch(fetchActivity(id))
  }
}

const fetchActivity = (id) => {
  return dispatch => {
    dispatch(fetchActivityRequest(id))

    return Api.fetchActivity(id)
    .then(response => {
      if (response.ok) {
        response.json().then(
          activity => dispatch(fetchActivitySuccess(id, activity))
        )
      }
      else {
        dispatch(fetchActivitiesFailure(id, { message: response.statusText }))
      }
    })
    .catch(error => dispatch(fetchActivitiesFailure(id, { message: error.message })))
  }
}

export const FETCH_ACTIVITY_REQUEST = 'FETCH_ACTIVITY_REQUEST'

const fetchActivityRequest = (id) => {
  return {
    type: FETCH_ACTIVITY_REQUEST,
    id
  }
}

export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS'

const fetchActivitySuccess = (id, activity) => {
  return {
    type: FETCH_ACTIVITY_SUCCESS,
    activity,
    id
  }
}

export const FETCH_ACTIVITY_FAILURE = 'FETCH_ACTIVITY_FAILURE'

const fetchActivityFailure = (id, error) => {
  return {
    type: FETCH_USER_FAILURE,
    error,
    id
  }
}

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'

export const deleteUser = (index) => {
  return {
    type: DELETE_USER_REQUEST,
    index
  }
}

export const DELETE_ACTIVITY_REQUEST = 'DELETE_ACTIVITY_REQUEST'

export const deleteActivity = (index) => {
  return {
    type: DELETE_ACTIVITY_REQUEST,
    index
  }
}
