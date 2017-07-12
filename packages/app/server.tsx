/* eslint-disable no-console */
import * as React from 'react'
import * as serialize from 'serialize-javascript'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ApolloProvider } from 'react-apollo'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Request, Response } from 'express'
import configureStore from '@vflows/store/configure'
import express from './express'
import routes from './routes'
import Html from './main/Html'

// :SHONK: polyfill fetch so that `createNetworkInterface` works in store configuration.
// There is surely a "proper" way of doing this!
import fetch from 'node-fetch'
global.fetch = fetch

const { env, port, ip, basename } = require('./config')

declare var webpackIsomorphicTools

function appError(err: Error, res: Response) {
  console.log(err)
  res.status(500).end()
}

const router = Router()

router.use((req, res, next) => {
  if (env === 'development') {
    webpackIsomorphicTools.refresh()
  }

  const memoryHistory = createMemoryHistory({ basename })
  configureStore({}, memoryHistory)
    .then(storeData => finishRouting(req, res, next, memoryHistory, storeData))
    .catch(err => appError(err, res))
})

function finishRouting(req: Request, res: Response, next: Function, memoryHistory, { client, store }) {
  const location = req.url.replace(basename, '')
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

    return fetchData()
      .then(() => configureStore(store.getState(), memoryHistory))
      .then(({ store: newStore }) => render(newStore))
      .catch(err => appError(err, res))
  })
}

const app = express(router)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${port}`)
  }
})

export default app
