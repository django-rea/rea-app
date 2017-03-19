import T from 'i18n-react'

import { ACTION_SET_LANG, ACTION_SET_LANG_FAILED, ACTION_SET_LANG_SUCCEEDED } from './constants'

const defaultState = {
  lang: 'en',
  error: null,
  intl: require('../../intl/en.yaml'),  // :TODO: read this dynamically based on UA prefs
}

T.setTexts(defaultState.intl)  // sync to i18n handler lib

export type langSetAction = {
  type: string,
  payload: {
    lang: string,
    intlData: Object, // recursive dict of intl definitions
  }
};

const reducer = (state = defaultState, action: langSetAction) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_SET_LANG:
      return {
        ...state,
        lang: payload.lang,
        error: null,
        intl: null,
      }
    case ACTION_SET_LANG_FAILED:
      return {
        ...state,
        lang: null,
        error: payload.error,
        intl: null,
      }
    case ACTION_SET_LANG_SUCCEEDED:
      T.setTexts(payload.intlData)  // sync to i18n handler lib when refreshed
      return {
        ...state,
        lang: payload.lang,
        intl: payload.intlData,
      }
    default:
      return state
  }
}

export default reducer
