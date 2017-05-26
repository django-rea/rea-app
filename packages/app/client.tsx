import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { AppContainer } from 'react-hot-loader'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '@vflows/store/configure'

import routes from './routes'
const { basename } = require('./config')

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const baseHistory = useRouterHistory(createHistory)({ basename })
const { client, store } = configureStore(initialState, baseHistory)
const history = syncHistoryWithStore(baseHistory, store)
const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <ApolloProvider client={client} store={store}>
      <Router key={Math.random()} history={history} routes={routes} />
    </ApolloProvider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./routes')
    render(renderApp(), root)
  })
}
