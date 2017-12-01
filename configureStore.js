import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import app from './reducers'
import heroSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore () {
  let store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(heroSaga)
  return store
}