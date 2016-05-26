import { FETCH_USERS_SUCCESS, FETCH_USER_SUCCESS } from '../actions/actionCreators'

const users = (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS_SUCCESS:
      return [
        ...state.filter(oldUser => !action.users.find(newUser => newUser.id === oldUser.id)),
        ...action.users
      ]
    case FETCH_USER_SUCCESS:
      return [
        ...state.filter(oldUser => oldUser.id !== action.user.id),
        action.user
      ]
    default:
      return state
  }
}

export default users
