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
 */

import { ActionPayload, AppState } from '@vflows/store/types'

import { bindActionCreators, ActionCreatorsMapObject } from 'redux'
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

interface GQLQuery { (...args: Array<any>): Promise<any> }
interface StartNotifier { (...args: Array<any>): Promise<any> }
interface ErrHandler { (e: Error): void }
interface ResHandler { (res: Object): void }

export function bindGQLUpdates(queryCB: GQLQuery, errorHandler: ErrHandler, resultHandler?: ResHandler, startNotifier?: StartNotifier) {
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
