/**
 * Helpers for GraphQL API interface
 *
 * For the rest of the API implementation, look to store/configure.js
 * and the `gql` & `graphql` interfaces from the `react-apollo` package.
 *
 * :TODO: It's probably very hard to unit test this logic and we'll have to at some point.
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

import type { ActionPayload, AppState } from '@vflows/store/types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'
import { mapProps } from 'recompose'

import { isLoggedIn, getActiveLoginToken } from '@vflows/store/selectors/auth'

/**
 * Function to manage side-effects from GraphQL, in order to get updates into
 * other parts of the redux store.
 *
 * This is mainly used currently for coordinating between `redux-form`, Apollo
 * and the rest of the app, and it's unknown whether there is a better, more idiomatic way.
 */

type GQLQuery = (...args: Array<any>) => Promise<*>;
type StartNotifier = (...args: Array<any>) => Promise<*>;
type ErrHandler = (e: Error) => void;
type ResHandler = (res: Object) => void;

function apiHandler(queryCB: GQLQuery, errorHandler: ErrHandler, resultHandler: ?ResHandler, startNotifier: ?StartNotifier) {
  return async (...args: Array<any>) => {
    if (startNotifier) {
      await startNotifier.apply(this, args)    // :IMPORTANT: for whatever whack reason, if you call this using ES6 destructuring everything breaks.
    }

    let result
    try {
      result = await queryCB(...args)
    } catch (e) {
      await errorHandler(e)
    }
    if (resultHandler && result) {
      await resultHandler(result.data)
    }

    return result.data
  }
}

/**
 * Bind GraphQL queries to components which also update other parts of the Redux store
 */

type ActionsDict = {
  onFail: (e: Error) => ActionPayload,
  onSuccess:? (res: any) => ActionPayload,
  onNotify:? (...args: Array<any>) => ActionPayload,
};

// $FlowFixMe need to find out correct type for gql output
export function graphqlWithSideEffects(gqlQuery, actions: ActionsDict) {
  return compose(
    // bind Redux dispatcher via usual `connect` method so that GraphQL callbacks can access action creators
    // $FlowFixMe some issue with connect() and intersection types
    connect(() => ({}), (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })),
    // bind GraphQL to redux-form (note you can do this multiple times to provide multiple queries or mutations to the component)
    graphql(gqlQuery, {
      // wrap up the `mutate` call to make it easier to interact with, otherwise we just get raw `props.mutate`
      props: ({ mutate, ownProps: { actions } }) => ({
        requestLogin: apiHandler(
          (username: string, password: string) => mutate({ variables: { username, password } }),
          actions.onFail,
          actions.onSuccess,
          actions.onNotify,
        ),
      }),
    })
  )
}

/**
 * Bind a graphQL query to a UI component which handles all auth logic automatically.
 * Returned data will be normalised:
 * - props.data.viewer => props.data
 * - props.data.loading => props.loading
 * - props.data.error => props.error
 */

export const authedGraphQL = (gqlQuery: string) => compose(
  connect((state: AppState) => ({
    isLoggedIn: isLoggedIn(state),
    variables: {
      token: getActiveLoginToken(state),
    },
  })),
  graphql(gql`
    query($token: String) {
      viewer(token: $token) {
        ${gqlQuery}
      }
    }
  `, {
    skip: (ownProps) => !ownProps.isLoggedIn,
    options: (props) => ({ variables: props.variables }),
  }),
  mapProps(props => {
    const { data, ...others } = props
    return {
      ...others,
      data: data.viewer,
      loading: data.loading,
      error: data.error,
    }
  }),
)
