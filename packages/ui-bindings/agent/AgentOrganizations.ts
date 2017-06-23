/**
 * HoC to load all organizations an agent is part of
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-06-23
 */

import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'

import { AppState } from '@vflows/store/types'
import { getActiveLoginToken } from '@vflows/store/selectors/auth'

import { coreAgentFields, coreOrganizationFields } from '../_fragments/Agent'

const query = gql`
query($token: String, $agentId_Orgs: Int) {
  viewer(token: $token) {
    agent(id: $agentId_Orgs) {
      organizations {
        ...coreOrganizationFields
      }
    }
  }
}
${coreAgentFields}
${coreOrganizationFields}
`

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
      agentId_Orgs: props.agentId,
    } }),
    // transform output data
    props: ({ ownProps, data: { viewer, loading, error, refetch } }) => ({
      loading,
      error,
      refetchOrganizations: refetch,  // :NOTE: call this in the component to force reload the data
      organizations: viewer ? viewer.agent.organizations : null,
    }),
  })
)
