import * as path from 'path'
import * as express from 'express'
import { Application } from 'express'
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

const { env } = require('./config')

const root = __dirname

const appFactory = (routes): Application => {
  const app = express()

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(compression())
    app.use(morgan('dev'))
    app.use(cookieParser())
    app.use(express.static(path.join(root, 'dist')))
  }

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(routes)

  return app
}

export default appFactory
