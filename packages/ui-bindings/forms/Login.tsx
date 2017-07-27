/**
 * Login form data bindings
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 */

import { AppState } from '@vflows/store/types'

import { reduxForm } from 'redux-form'
import { gql, graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import { bindActionCreators, ActionCreatorsMapObject } from 'redux'

import { bindGQLUpdates } from '@vflows/services/api'
import * as AuthActions from '@vflows/store/actions/auth'
import { hasLoginError, getLoginErrorMessage } from '@vflows/store/selectors/auth'

// define the GraphQL to execute
const loginQuery = gql`
  mutation($username: String!, $password: String!) {
    createToken(username: $username, password: $password) {
      token
    }
  }
`

export default compose(
  // bind Redux dispatcher via usual `connect` method so that GraphQL callbacks can access action creators
  connect(() => ({}), (dispatch) => ({
    actions: bindActionCreators(
      {
        onNotify: AuthActions.signIn,
        onFail: AuthActions.signInFailed,
        onSuccess: AuthActions.signInSucceeded,
      },
      dispatch
    )
  })),
  // bind GraphQL to redux-form (note you can do this multiple times to provide multiple queries or mutations to the component)
  graphql(loginQuery, {
    // wrap up the `mutate` call to make it easier to interact with, otherwise we just get raw `props.mutate`
    props: ({ mutate, ownProps: { actions } }) => ({
      requestLogin: bindGQLUpdates(
        (username: string, password: string) => mutate({ variables: { username, password } }),
        actions.onFail,
        actions.onSuccess,
        actions.onNotify,
      ),
    }),
  }),
  // bind form controller, using props given by GraphQL above
  reduxForm({
    form: 'login',
    // pass submit action to call back to the exposed GraphQL mutation provided above
    onSubmit: ({ user, pass }, dispatch, { requestLogin }) => requestLogin(user, pass),
  }),
  // connect to auth state as well
  connect((state: AppState) => ({
    hasLoginError: hasLoginError(state),
    errorMessage: getLoginErrorMessage(state),
  })),
)
