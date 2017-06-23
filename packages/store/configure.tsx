import { createStore, applyMiddleware, compose } from 'redux'
import { ApolloClient, createNetworkInterface, gql, IntrospectionFragmentMatcher } from 'react-apollo'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import * as persistState from 'redux-localstorage'

import reducer from './reducer'
import sagas from './sagas'

const apiUrl = process.env.API_URL || 'http://localhost:8000/api/graph'
const browser = typeof window !== 'undefined'

// Extra Redux middleware in dev mode
let devMiddlewares = (f) => f
if (process.env.NODE_ENV === 'development') {
  devMiddlewares = compose(
    // Connector for RemoteDev extension / app
    require('remote-redux-devtools').default({ hostname: 'localhost', port: 7999 })
  )
}

// initial query to send to GraphQL server to determine schema types for fragment handling
// @see http://dev.apollodata.com/react/initialization.html#fragment-matcher
const introspectionQuery = gql`{
  __schema {
    types {
      kind
      name
      possibleTypes {
        name
      }
    }
  }
}`

// Primary Redux store configurator (middlewares & sagas)
const configureStore = async (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()

  const networkInterface = createNetworkInterface({ uri: apiUrl })

  const schemaMeta = await networkInterface.query({
    query: introspectionQuery,
  })

  const client = new ApolloClient({
    networkInterface: networkInterface,
    fragmentMatcher: new IntrospectionFragmentMatcher({
      introspectionQueryResultData: schemaMeta.data,
    }),
  })

  const finalCreateStore = compose(
    applyMiddleware(
      client.middleware(),
      thunk,
      sagaMiddleware,
      routerMiddleware(history),
    ),
    browser ? persistState('auth') : (m) => m,
    devMiddlewares
  )(createStore)

  const store = finalCreateStore(reducer(client), initialState)
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return { client, store }
}

export default configureStore
