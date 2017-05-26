import express, { Application } from 'express'
import compression from 'compression'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'

const { env } = require('./config')

const root = path.join(__dirname, '../../..')

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
