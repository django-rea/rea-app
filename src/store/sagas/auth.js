/**
 * Async action definition for authentication
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

import { call, put, takeLatest } from 'redux-saga/effects'

import Api from 'services/api'

import { ACTION_SIGNIN, ACTION_SIGNIN_FAILED, ACTION_SIGNIN_SUCCEEDED } from '../constants'

import type { SigninActionPayload } from '../actions/auth'

export type SigninFailedPayload = {
  type: string,
  payload: {
    error: Error,
  },
};

export type SigninSucceededPayload = {
  type: string,
  payload: {
    response: Object, // :TODO: define this!
  },
};

export function* watchForLangChange({ payload }: SigninActionPayload): Generator<SigninActionPayload, *, SigninSucceededPayload | SigninFailedPayload> {
  try {
    // :TODO: this doesn't work yet, needs to be hooked up to something real
    const login = yield call(Api.get, payload.username, payload.password)
    yield put({ type: ACTION_SIGNIN_SUCCEEDED, response: login })
  } catch (e) {
    yield put({ type: ACTION_SIGNIN_FAILED, error: e })
  }
}

export default function* (): Generator<*, *, *> {
  yield takeLatest(ACTION_SIGNIN, watchForLangChange)
}
