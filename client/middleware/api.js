import fecth from 'isomorphic-fetch'

const { protocol, hostname } = window.location

const API_ROOT = `${protocol}//${hostname}:3000`

export const fetchUsers = () => {
  return fetch(`${API_ROOT}/users`)
}

export const fetchUser = (id) => {
  return fetch(`${API_ROOT}/users/${id}`)
}

export const fetchUserActivities = (userId) => {
  return fetch(`${API_ROOT}/users/${userId}/activities`)
}

export const fetchActivity = (id) => {
  return fetch(`${API_ROOT}/activities/${id}`)
}
