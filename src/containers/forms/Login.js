/**
 * Login form data bindings
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

import { reduxForm } from 'redux-form'
import { gql, graphql, compose } from 'react-apollo'

import LoginForm from 'components/organisms/LoginForm'

// define the GraphQL to execute
const loginQuery = gql`
  mutation($username: String!, $password: String!) {
    createToken(input: { username: $username, password: $password }) {
      token
      ok
      error
    }
  }
`

export default compose(
  // bind GraphQL to redux-form (note you can do this multiple times to provide multiple queries or mutations to the component)
  graphql(loginQuery, {
    // wrap up the `mutate` call to make it easier to interact with, otherwise we just get raw `props.mutate`
    props: ({ mutate }) => ({
      requestLogin: (username: string, password: string) => mutate({ variables: { username, password } }),
    }),
  }),
  // bind redux-form to component
  reduxForm({
    form: 'login',
    // pass submit action to call back to the exposed GraphQL mutation provided above
    onSubmit: ({ user, pass }, dispatch, props) => props.requestLogin(user, pass),
  }),
)(LoginForm)
