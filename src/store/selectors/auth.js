/**
 * Selector logic for accessing auth data in view components
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

import { createSelector } from 'reselect'

import type { AuthState } from '../reducers/auth'

export const isLoggedIn = (state: AuthState) => state.activeLogin >= 0
