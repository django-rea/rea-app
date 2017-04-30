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
 * @flow
 */

import type { ActionPayload } from '../types'

import { ACTION_SIGNIN, ACTION_SIGNIN_FAILED, ACTION_SIGNIN_SUCCEEDED } from '../constants'

export type SigninActionPayload = {
  payload: {
    username: string,
    password: string,
  },
} & ActionPayload;

export const signIn = (username: string, password: string): SigninActionPayload => ({
  type: ACTION_SIGNIN,
  payload: { username, password },
})


export type SigninFailedPayload = {
  payload: { error: Error },
} & ActionPayload;

export const signInFailed = (e: Error): SigninFailedPayload => ({
  type: ACTION_SIGNIN_FAILED,
  payload: { error: e },
})


export type SigninSucceededPayload = {
  payload: {
    response: Object, // :TODO: define this!
  },
} & ActionPayload;

export const signInSucceeded = (response: Object): SigninSucceededPayload => ({
  type: ACTION_SIGNIN_SUCCEEDED,
  payload: {
    response,
  },
})
