/**
 * Some additional general-purpose types for Redux store related functionality
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

export type ActionPayload = {
  type: string,
  payload: ?Object,
};
