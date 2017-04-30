/**
 * Login form data bindings
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

import type { AppState } from '@vflows/store/types'

import { reduxForm } from 'redux-form'
import { gql, compose } from 'react-apollo'
import { connect } from 'react-redux'

import { graphqlWithSideEffects } from '@vflows/services/api'
import * as AuthActions from '@vflows/store/actions/auth'
import { hasLoginError, getLoginErrorMessage } from '@vflows/store/selectors/auth'

import LoginForm from '@vflows/views/organisms/LoginForm'

// define the GraphQL to execute
const loginQuery = gql`
  mutation($username: String!, $password: String!) {
    createToken(username: $username, password: $password) {
      token
    }
  }
`

export default compose(
  // bind GraphQL query and state updates
  graphqlWithSideEffects(loginQuery, {
    onNotify: AuthActions.signIn,
    onFail: AuthActions.signInFailed,
    onSuccess: AuthActions.signInSucceeded,
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
)(LoginForm)
