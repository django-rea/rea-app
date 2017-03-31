/**
 * Redux action constants
 *
 * These are used to coordinate the action creators (actions/*.js) with the
 * state reducers (reducers/*.js).
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

export const ACTION_SIGNIN = 'AUTH:SIGNIN'
export const ACTION_SIGNIN_FAILED = 'AUTH:SIGNIN:FAILED'
export const ACTION_SIGNIN_SUCCEEDED = 'AUTH:SIGNIN:SUCCEEDED'
export const ACTION_SIGNOUT = 'AUTH:SIGNOUT'

export const ACTION_SET_LANG = 'INTL:SET_LANG'
export const ACTION_SET_LANG_FAILED = 'INTL:SET_LANG:FAILED'
export const ACTION_SET_LANG_SUCCEEDED = 'INTL:SET_LANG:SUCCEEDED'
