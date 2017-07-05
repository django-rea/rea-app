/**
 * Query fragments for Economic Agents
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-06-23
 */

import { gql } from 'react-apollo'

export const coreAgentFields = gql`
fragment coreAgentFields on Agent {
  id
  name
  image
}`

export const coreOrganizationFields = gql`
fragment coreOrganizationFields on Agent {
  ...coreAgentFields
  type
  note
}`

export const coreEventsFields = gql`
fragment coreEventsFields on Agent {
  agentEconomicEvents {
    id
    action
    start
    affectedQuantity {
      numericValue
      unit {
        name
      }
    }
    affectedResource {
      id
      resourceTaxonomyItem {
        name
        category
      }
      trackingIdentifier
    }
    provider {
      id
      name
      image
    }
    receiver {
      id
      name
    }
    process {
      id
      name
    }
    note
  }
}`

// export const coreResourcesFields = gql`
// fragment coreResourcesFields on Agent {
//   ownedEconomicResources (category: INVENTORY) {
//     id
//     resourceType
//     trackingIdentifier
//     numericValue
//     unit
//     image
//     note
//   }
// }`
