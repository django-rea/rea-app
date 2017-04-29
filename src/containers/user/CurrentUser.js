/**
 * HoC to send currently active user data to UI
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-24
 * @flow
 */

import { authedGraphQL } from 'services/api'

export default authedGraphQL(`
  agent(me: true) {
    name
  }
`)
