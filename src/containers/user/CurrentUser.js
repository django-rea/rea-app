/**
 * HoC to send currently active user data to UI
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-24
 * @flow
 */

import type { AppState } from 'store/types'

import { graphql, gql, compose } from 'react-apollo'
import { connect } from 'react-redux'

import { isLoggedIn, getActiveLoginToken } from 'store/selectors/auth'

const userQuery = gql`
  query($token: String) {
    viewer(token: $token) {
      agent(me: true) {
        name
      }
    }
  }
`

export default compose(
  connect((state: AppState) => ({
    isLoggedIn: isLoggedIn(state),
    variables: {
      token: getActiveLoginToken(state),
    },
  })),
  graphql(userQuery, {
    skip: (ownProps) => !ownProps.isLoggedIn,
    options: (props) => ({ variables: props.variables }),
  }),
)
