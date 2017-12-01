import {
  FETCHING_DATA
} from './constants'
import getHeroes from './api'

export function fetchData () {
  return {
    type: FETCHING_DATA
  }
}