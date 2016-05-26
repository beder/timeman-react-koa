import { FETCH_USERS_FAILURE } from '../actions/actionCreators'

const error = (state = {}, action) => {
  switch(action.type) {
    case FETCH_USERS_FAILURE:
      return { message: action.error.message }
    default:
      return state
  }
}

export default error
