/**
 * HoC to send all Organizatiosn to UI
 *
 * @package: REA app
 * @author:  ivan <bernini@sinventati.org>
 * @since:   2017-06-21
 */

import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'

import { AppState } from '@vflows/store/types'
import { getActiveLoginToken } from '@vflows/store/selectors/auth'

// import { coreAgentFields, coreOrganizationFields, coreEventsFields } from '../_fragments/Agent'

const query = gql`
query($token: String) {
  viewer(token: $token) {
    allOrganizations {
      id
      name
      image
      note
      type
      __typename
    }
  }
}
`
// :TODO: see if there's a way to generate these from GraphQL schema
// :TODO: we should separate Person / Organization to separate interfaces

export interface AllOrgsType {
  id: number,
  note: string,
  image: string,
  name: string,
  type: string,
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
    } }),
    // transform output data
    props: ({ ownProps, data: { viewer, loading, error, refetch } }) => ({
      loading,
      error,
      refetchAgent: refetch,  // :NOTE: call this in the component to force reload the data
      allOrgs: viewer ? viewer.allOrganizations : null,
    }),
  })
)
