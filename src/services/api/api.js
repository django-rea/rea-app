/**
 * Helpers for GraphQL API interface
 *
 * For the rest of the API implementation, look to store/configure.js
 * and the `gql` & `graphql` interfaces from the `react-apollo` package.
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

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

export function apiHandler(queryCB: GQLQuery, errorHandler: ErrHandler, resultHandler: ?ResHandler, startNotifier: ?StartNotifier) {
  return async (...args: Array<any>) => {
    if (startNotifier) {
      await startNotifier.apply(this, args)    // :IMPORTANT: for whatever whack reason, if you call this using ES6 destructuring everything breaks.
    }

    let result
    try {
      result = await queryCB(...args)
      if (resultHandler) {
        await resultHandler(result)
      }
    } catch (e) {
      await errorHandler(e)
    }

    return result
  }
}
