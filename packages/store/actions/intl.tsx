/**
 * Locale-related actions
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 */

import { createSimpleAction } from 'redux-action-helper'

import { ACTION_SET_LANG } from '../constants'

export interface LangSetActionInput {
  lang: string,
};

export interface LangSetActionPayload {
  type: string,
  payload: LangSetActionInput,
};

export interface LangSetActionFn { (in: LangSetActionInput) => LangSetActionPayload };

export const setLang: LangSetActionFn = createSimpleAction(ACTION_SET_LANG)
