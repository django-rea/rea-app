/**
 * Auth-related actions
 *
 * These are triggered by redux-form actions in the Login form and subsequent
 * Apollo queries returning, and are present only to provide auth status to other
 * parts of the app in a simple and easily retrievable manner.
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 */

import { ActionPayload } from '../types'

import { ACTION_SIGNIN, ACTION_SIGNIN_FAILED, ACTION_SIGNIN_SUCCEEDED } from '../constants'

export interface LoginData {
  token: string,  // :TODO: other stuff needs to be in here, we're just not sure what yet.
}

export interface LoginResponse {
  createToken: LoginData,
}

export interface SigninActionPayload extends ActionPayload {
  payload: {
    username: string,
    password: string,
  },
}

export const signIn = (username: string, password: string): SigninActionPayload => ({
  type: ACTION_SIGNIN,
  payload: { username, password },
})

export interface SigninFailedPayload extends ActionPayload {
  payload: { error: Error },
}

export const signInFailed = (e: Error): SigninFailedPayload => ({
  type: ACTION_SIGNIN_FAILED,
  payload: { error: e },
})

export interface SigninSucceededPayload extends ActionPayload {
  payload: {
    response: LoginResponse,
  },
}

export const signInSucceeded = (response: LoginResponse): SigninSucceededPayload => ({
  type: ACTION_SIGNIN_SUCCEEDED,
  payload: {
    response,
  },
})
