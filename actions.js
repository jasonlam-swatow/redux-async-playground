import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from './constants'
import getHeroes from './api'

export function getData () {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess (data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure () {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

// `fetchData` here would be a thunk
// which, when called, returns a function
// that dispatches `getData` action,
// then calls `getHeroes` whose promise
// will resolve and dispatch `getDataSuccess` action
export function fetchData () {
  return (dispatch) => {
    dispatch(getData())
    getHeroes()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.error(err))
  }
}