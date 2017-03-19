import { call, put, takeLatest } from 'redux-saga/effects'

import Api from 'services/api'

import { ACTION_SET_LANG, ACTION_SET_LANG_FAILED, ACTION_SET_LANG_SUCCEEDED } from './constants'

import type { langSetAction } from './reducer'

export function* watchForLangChange(action: langSetAction) {
  try {
    const intl = yield call(Api.get, action.payload.lang) // :TODO: this doesn't work yet, needs to be hooked up to something real
    yield put({ type: ACTION_SET_LANG_SUCCEEDED, intlData: intl })
  } catch (e) {
    yield put({ type: ACTION_SET_LANG_FAILED, error: e })
  }
}

export default function* () {
  yield takeLatest(ACTION_SET_LANG, watchForLangChange)
}
