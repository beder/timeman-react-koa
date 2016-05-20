const activities = (state = [], action) => {
  switch(action.type) {
    case 'DELETE_ACTIVITY':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export default activities
