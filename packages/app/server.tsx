/* eslint-disable no-console */
import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ApolloProvider } from 'react-apollo'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import configureStore from '@vflows/store/configure'
import express from './express'
import routes from './routes'
import Html from './main/Html'

const { env, port, ip, basename } = require('./config')

declare var webpackIsomorphicTools

const router = Router()

router.use((req, res, next) => {
  if (env === 'development') {
    webpackIsomorphicTools.refresh()
  }

  const location = req.url.replace(basename, '')
  const memoryHistory = createMemoryHistory({ basename })
  const { client, store } = configureStore({}, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (error || !renderProps) {
      return next(error)
    }

    const fetchData = () => new Promise((resolve, reject) => {
      const method = req.method.toLowerCase()
      const { params, location, components } = renderProps
      const promises = []

      components.forEach((component) => {
        if (component) {
          while (component && !component[method]) {
            // eslint-disable-next-line no-param-reassign
            component = component.WrappedComponent
          }
          component &&
          component[method] &&
          promises.push(component[method]({ req, res, params, location, store }))
        }
      })

      Promise.all(promises).then(resolve).catch(reject)
    })

    const render = (store) => {
      const content = renderToString(
        <ApolloProvider store={store} client={client}>
          <RouterContext {...renderProps} />
        </ApolloProvider>
      )

      const initialState = store.getState()
      const assets = webpackIsomorphicTools.assets()
      const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
      const markup = <Html {...{ assets, state, content }} />
      const doctype = '<!doctype html>\n'
      const html = renderToStaticMarkup(markup)

      res.send(doctype + html)
    }

    return fetchData().then(() => {
      const { store: newStore } = configureStore(store.getState(), memoryHistory)
      render(newStore)
    }).catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  })
})

const app = express(router)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${port}`)
  }
})

export default app
