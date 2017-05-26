/**
 * Deferred actions for intl loading
 *
 * :DEPRECATED: (probably, if we can read intl data via GraphQL API)
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 */

import { call, put, takeLatest } from 'redux-saga/effects'

// import Api from 'services/api'

import { ACTION_SET_LANG, ACTION_SET_LANG_FAILED, ACTION_SET_LANG_SUCCEEDED } from '../constants'

import { LangSetActionPayload } from '../actions/intl'

export interface LangSetActionFailedPayload {
  type: string,
  payload: {
    lang: string,
    error: Error,
  },
}

export interface LangSetActionSucceededPayload {
  type: string,
  payload: {
    lang: string,
    intlData: Object,
  },
}

export function* watchForLangChange({ payload }: LangSetActionPayload) { //: Generator<LangSetActionPayload, *, LangSetActionSucceededPayload | LangSetActionFailedPayload> {
  try {
    // const intl = yield call(Api.get, payload.lang) // :TODO: this doesn't work yet, needs to be hooked up to something real
    yield put({ type: ACTION_SET_LANG_SUCCEEDED, lang: payload.lang, intlData: null })
  } catch (e) {
    yield put({ type: ACTION_SET_LANG_FAILED, lang: payload.lang, error: e })
  }
}

export default function* () {
  yield takeLatest(ACTION_SET_LANG, watchForLangChange)
}
