/**
 * Auth-related data storage
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 */

import { createReducer, createLeaf } from 'redux-action-helper'

import { LoginData, SigninActionPayload, SigninFailedPayload, SigninSucceededPayload } from '../actions/auth'

import { ACTION_SIGNIN, ACTION_SIGNIN_SUCCEEDED, ACTION_SIGNIN_FAILED } from '../constants'

export interface AuthState {
  activeLogin: number,
  logins: Array<LoginData>,
  isLoggingIn: boolean,
  loginError?: Error,
}

export const initialState: AuthState = {
  activeLogin: -1,   // index of currently active login
  logins: [],        // list of current login session tokens
  // current login process status
  isLoggingIn: false,
  loginError: null,
}

const signin = createLeaf(ACTION_SIGNIN, (state, { payload }: SigninActionPayload) => ({
  ...state,
  isLoggingIn: payload.username || true,  // account for logins which forget to enter a username
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
  logins: state.logins.concat([payload.response.createToken]),
}))

export default createReducer({ ...initialState }, {
  signin, signinFailed, signinSucceeded,
})
