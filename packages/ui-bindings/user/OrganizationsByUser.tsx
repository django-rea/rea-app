/**
 * HoC to send currently active user data to UI
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-24
 */

import { authedGraphQL } from '@vflows/services/api'

export default authedGraphQL(`
  myAgent {
     organizations {
        id
        name
        image
      }
  }
`)
