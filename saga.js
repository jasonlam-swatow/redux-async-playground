import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from './constants'
import { put, takeEvery } from 'redux-saga/effects'
import getHeroes from './api'

function* fetchData (action) {
  try {
    const data = yield getHeroes()  // wait for the heroes to be returned
    yield put({ type: FETCHING_DATA_SUCCESS, data })  // dispatch success action
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* heroSaga () {
  // listen to every according action
  // and call the handler
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default heroSaga