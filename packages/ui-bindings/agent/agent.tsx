/**
 * HoC to send agent by its ID to UI
 *
 * @package: REA app
 * @author:  ivan <bernini@sinventati.org>
 * @since:   2017-06-21
 */

import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'

import { AppState } from '@vflows/store/types'
import { getActiveLoginToken } from '@vflows/store/selectors/auth'

import { coreAgentFields, coreOrganizationFields, coreEventsFields } from '../_fragments/Agent'

const query = gql`
query($token: String, $agentId: Int) {
  viewer(token: $token) {
    agent(id: $agentId) {
      ...coreAgentFields
      ...on Organization {
        ...coreOrganizationFields
        members {
          ...coreAgentFields
          ...on Organization {
            ...coreOrganizationFields
          }
        }
      }
      ...coreEventsFields
      agentProcesses(isFinished: false) {
        # :TODO: use fragment for this
        id
        name
      }
      ownedEconomicResources (category: INVENTORY) {
        id
        resourceType
        trackingIdentifier
        numericValue
        unit
        image
        note
      }
    }
  }
}
${coreAgentFields}
${coreOrganizationFields}
${coreEventsFields}
`
// :TODO: see if there's a way to generate these from GraphQL schema
// :TODO: we should separate Person / Organization to separate interfaces
 interface Events {
  id: number
  action: string
  start: string
  numericValue: number
  unit: string
  note: string
  workCategory: string
  affectedResource: Object
  provider: Object
  receiver: Object
  process: Object
}


export interface AgentType {
  id: number,
  note: string,
  image: string,
  agentProcesses?: Array<{
    id: number,
    name: string,
  }>,
  ownedEconomicResources?: Array<{
    id: number,
    resourceType: string,
  }>,
  economicEvents?: Array<Events>
  members?: Array<AgentType>,
}

export default compose(
  // bind input data from the store
  connect((state: AppState) => ({
    variables: {
      token: getActiveLoginToken(state),
    },
  })),
  graphql(query, {
    // read query vars into query from input data above
    options: (props) => ({ variables: {
      ...props.variables,
      agentId: props.agentId,
    } }),
    // transform output data
    props: ({ ownProps, data: { viewer, loading, error, refetch } }) => ({
      loading,
      error,
      refetchAgent: refetch,  // :NOTE: call this in the component to force reload the data
      agent: viewer ? viewer.agent : null,
    }),
  })
)
