/**
 * Locale-related actions
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

import { createSimpleAction } from 'redux-action-helper'

import { ACTION_SET_LANG } from '../constants'

export type LangSetActionInput = {
  lang: string,
};

export type LangSetActionPayload = {
  type: string,
  payload: LangSetActionInput,
};

export type LangSetActionFn = (LangSetActionInput) => LangSetActionPayload;

export const setLang: LangSetActionFn = createSimpleAction(ACTION_SET_LANG)
