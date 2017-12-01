import { FETCHING_DATA } from './constants'
import { getDataSuccess, getDataFailure } from './actions'
import getHeroes from './api'

import 'rxjs'
import { Observable } from 'rxjs/Observable'

export default fetchHeroEpic = action$ =>
  action$.ofType(FETCHING_DATA)
    .mergeMap(action =>
      Observable.fromPromise(getHeroes())
        .map(response => getDataSuccess(response))
        .catch(err => Observable.of(getDataFailure(err)))
    )