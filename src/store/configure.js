import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

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

  const finalCreateStore = compose(
    applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
    devMiddlewares
  )(createStore)

  const store = finalCreateStore(reducer, initialState)
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

  return store
}

export default configureStore
