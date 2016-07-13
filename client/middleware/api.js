import fecth from 'isomorphic-fetch'

const hostname = window.location.hostname

const API_ROOT = 'http://' + hostname + ':3000'

export const fetchUsers = () => {
  const fullUrl = API_ROOT + '/users'
  return fetch(fullUrl)
}

export const fetchUser = (id) => {
  const fullUrl = API_ROOT + '/users/' + id
  return fetch(fullUrl)
}

export const fetchUserActivities = (userId) => {
  const fullUrl = API_ROOT + '/users/' + userId + '/activities'
  return fetch(fullUrl)
}

export const fetchActivity = (id) => {
  const fullUrl = API_ROOT + '/activities/' + id
  return fetch(fullUrl)
}
