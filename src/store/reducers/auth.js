/**
 * Auth-related data storage
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

import { createReducer, createLeaf } from 'redux-action-helper'

import type { SigninActionPayload } from '../actions/auth'
import type { SigninFailedPayload, SigninSucceededPayload } from '../sagas/auth'

import { ACTION_SIGNIN, ACTION_SIGNIN_SUCCEEDED, ACTION_SIGNIN_FAILED } from '../constants'

type loginData = {
  token: string,  // :TODO: other stuff needs to be in here, we're just not sure what yet.
};

export type AuthState = {
  activeLogin: number,
  logins: Array<loginData>,
  isLoggingIn: boolean,
  loginError: ?Error,
};

const initialState: AuthState = {
  activeLogin: -1,   // index of currently active login
  logins: [],        // list of current login session tokens
  // current login process status
  isLoggingIn: false,
  loginError: null,
}

const signin = createLeaf(ACTION_SIGNIN, (state, { payload }: SigninActionPayload) => ({
  ...state,
  isLoggingIn: payload.username,
  loginError: null,
}))

const signinFailed = createLeaf(ACTION_SIGNIN_FAILED, (state, { payload }: SigninFailedPayload) => ({
  ...state,
  isLoggingIn: false,
  loginError: payload.error,
}))

const signinSucceeded = createLeaf(ACTION_SIGNIN_SUCCEEDED, (state, { payload }: SigninSucceededPayload) => ({
  ...state,
  isLoggingIn: false,
  activeLogin: state.activeLogin + 1,
  logins: state.logins.concat([payload.response]),
}))

export const reducer = createReducer({ ...initialState }, {
  signin, signinFailed, signinSucceeded,
})
