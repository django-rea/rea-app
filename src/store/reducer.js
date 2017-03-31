/**
 * Reducer registration
 *
 * The initial state of the app is built from the initial state of all individual reducers
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

// third-party reducers
const reducers = {
  routing,
  form,
}

// application reducers
const req = require.context('.', true, /\.\/reducers\/.+\.js$/)

req.keys().forEach((key) => {
  const storeName = key.replace(/\.\/reducers\/(.+)\.js$/, '$1')
  reducers[storeName] = req(key).default
})

// generate & export
export default combineReducers(reducers)
