/**
 * Auth-related actions
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

import { createSimpleAction } from 'redux-action-helper'

import { ACTION_SIGNIN } from '../constants'

export type SigninActionInput = {
  username: string,
  password: string,
};

export type SigninActionPayload = {
  type: string,
  payload: SigninActionInput,
};

export type SigninActionFn = (SigninActionInput) => SigninActionPayload;

export const signIn: SigninActionFn = createSimpleAction(ACTION_SIGNIN)
