/**
 * HoC to load currently authed user's organizations
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
query($token: String) {
  viewer(token: $token) {
    myAgent {
      ...coreAgentFields
      memberOfOrganizations {
        ...coreAgentFields
      }
    }
  }
}
${coreAgentFields}
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
    options: (props) => ({ variables: props.variables }),
    // transform output data
    props: ({ ownProps, data: { viewer, loading, error, refetch } }) => ({
      loading,
      error,
      refetchCurrentOrgs: refetch,  // :NOTE: call this in the component to force reload the data
      organizations: viewer ? viewer.myAgent.memberOfOrganizations : null,
    }),
  })
)
