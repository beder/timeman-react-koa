export const deleteUser = (index) => {
  return {
    type: 'DELETE_USER',
    index
  }
}

export const deleteActivity = (index) => {
  return {
    type: 'DELETE_ACTIVITY',
    index
  }
}
