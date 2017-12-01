import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import app from './reducers'
import fetchHeroEpic from './epic'

const epicMiddleware = createEpicMiddleware(fetchHeroEpic)

export default function configureStore () {
  let store = createStore(app, applyMiddleware(epicMiddleware))
  return store
}