/**
 * Some additional general-purpose types for Redux store related functionality
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 */

import { AuthState } from './reducers/auth'

// entire application state (combination of state from all reducers)
export interface AppState {
  auth: AuthState,
};

// base state for all action creator outputs
export interface ActionPayload {
  type: string,
  payload?: Object,
};
