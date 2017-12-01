import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from './constants'
import getHeroes from './api'

export function fetchData () {
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

export function getDataFailure (err) {
  return {
    type: FETCHING_DATA_FAILURE,
    errMsg: err
  }
}