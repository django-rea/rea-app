/**
 * Login form data bindings
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

import { reduxForm } from 'redux-form'
import { gql, compose } from 'react-apollo'

import * as AuthActions from 'store/actions/auth'
import { graphqlWithSideEffects } from 'services/api'

import LoginForm from 'components/organisms/LoginForm'

// define the GraphQL to execute
const loginQuery = gql`
  mutation($username: String!, $password: String!) {
    createToken(username: $username, password: $password) {
      token
    }
  }
`

export default compose(
  graphqlWithSideEffects(loginQuery, {
    onNotify: AuthActions.signIn,
    onFail: AuthActions.signInFailed,
    onSuccess: AuthActions.signInSucceeded,
  }),
  // bind redux-form to component
  reduxForm({
    form: 'login',
    // pass submit action to call back to the exposed GraphQL mutation provided above
    onSubmit: ({ user, pass }, dispatch, { requestLogin }) => requestLogin(user, pass),
  }),
)(LoginForm)
