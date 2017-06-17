/**
 * HoC to send currently active project data to UI
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-06-17
 */

import { authedGraphQL } from '@vflows/services/api'

export default authedGraphQL(`
  agent(id: 80) {
    name
  }
`)
