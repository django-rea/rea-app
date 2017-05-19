import { createStore, applyMiddleware, compose } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import persistState from 'redux-localstorage'

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

// Primary Redux store configurator (middlewares & sagas)
const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()

  const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: apiUrl }),
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
