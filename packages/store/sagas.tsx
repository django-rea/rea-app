/**
 * Import & register all async action handlers
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-15
 */

import { fork } from 'redux-saga/effects'

const req = require.context('.', true, /\.\/sagas\/.+\.js$/)

const sagas = []

req.keys().forEach((key) => {
  sagas.push(req(key).default)
})

// register all sagas into the same generator and fork to handle them separately
export default function* () {
  yield sagas.map(fork)
}
