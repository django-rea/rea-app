/**
 * HoC to send agent by its ID to UI
 *
 * @package: REA app
 * @author:  ivan <bernini@sinventati.org>
 * @since:   2017-06-21
 */

import { authedGraphQLWithId } from '@vflows/services/api'

export default authedGraphQLWithId(`
 agent(id: $id) {
    name
    id
    note
    unfinishedProcesses {
      id
      name
    }
    members {
      id
      name
      image
    }
    ownedEconomicResources {
      resourceType
    }
  }
`)
