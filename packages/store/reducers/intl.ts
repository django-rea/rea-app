/**
 * Locale data storage
 *
 * Also handles injection into the `i18n-react` helper
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 */

import T from 'i18n-react'
import { createReducer, createLeaf } from 'redux-action-helper'

import { LangSetActionPayload } from '../actions/intl'
import { LangSetActionFailedPayload, LangSetActionSucceededPayload } from '../sagas/intl'

import { ACTION_SET_LANG, ACTION_SET_LANG_FAILED, ACTION_SET_LANG_SUCCEEDED } from '../constants'

export const initialState = {
  lang: 'en',
  error: null,
  intl: require('../intl/en.yaml'),  // :TODO: read this dynamically based on UA prefs
}

T.setTexts(initialState.intl)  // sync to i18n handler lib

const setLang = createLeaf(ACTION_SET_LANG, (state, { payload }: LangSetActionPayload) => ({
  ...state,
  lang: payload.lang,
  error: null,
  intl: null,
}))

const setLangFailed = createLeaf(ACTION_SET_LANG_FAILED, (state, { payload }: LangSetActionFailedPayload) => ({
  ...state,
  lang: null,
  error: payload.error,
  intl: null,
}))

const setLangSucceeded = createLeaf(ACTION_SET_LANG_SUCCEEDED, (state, { payload }: LangSetActionSucceededPayload) => {
  T.setTexts(payload.intlData)  // re-sync to i18n handler lib

  return {
    ...state,
    lang: payload.lang,
    intl: payload.intlData,
  }
})

export default createReducer({ ...initialState }, {
  setLang,
  setLangFailed,
  setLangSucceeded,
})
