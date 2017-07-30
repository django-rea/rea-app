/**
 * HoC to send process by its ID to UI
 *
 * @package: REA app
 * @author:  ivan <bernini@sinventati.org>
 * @since:   2017-06-21
 */

import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'

import { AppState } from '@vflows/store/types'
import { getActiveLoginToken } from '@vflows/store/selectors/auth'

import { coreCommitmentFields, coreEventFields } from '../_fragments/Process'

const query = gql`
query($token: String, $processId: Int) {
  viewer(token: $token) {
    process(id: $processId) {
      name
      id
      note
      workingAgents {
        id
        name
        image
      }
      unplannedEconomicEvents {
        ...coreEventFields
      }
      processEconomicEvents {
        ...coreEventFields
      }
      processCommitments {
        ...coreCommitmentFields
      }
      inputs {
        ...coreEventFields
      }
      workInputs {
        ...coreEventFields
      }
      nonWorkInputs {
        ...coreEventFields
      }
      outputs {
        ...coreEventFields
      }
      committedInputs {
        ...coreCommitmentFields
      }
      committedWorkInputs {
        ...coreCommitmentFields
      }
      committedNonWorkInputs {
        ...coreCommitmentFields
      }
      committedOutputs {
        ...coreCommitmentFields
      }
      nextProcesses {
        name
      }
      previousProcesses {
        name
      }
    }
  }
}
${coreEventFields}
${coreCommitmentFields}
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
  name: string,
  agentProcesses?: Array<{
    id: number,
    name: string,
  }>,
  agentEconomicEvents?: Array<Events>
  agentRelationships?: Array<AgentType>,
  ownedEconomicResources?: Array<{
    id: number,
    resourceType: string,
  }>,
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
      processId: props.processId,
    } }),
    // transform output data
    props: ({ ownProps, data: { viewer, loading, error, refetch } }) => ({
      loading,
      error,
      refetchAgent: refetch,  // :NOTE: call this in the component to force reload the data
      process: viewer ? viewer.process : null,
    }),
  })
)
