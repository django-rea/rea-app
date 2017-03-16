/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const ip = process.env.IP || '0.0.0.0'
const port = (+process.env.PORT + 1) || 3001

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  host: ip,
  stats: {
    // @see https://github.com/webpack/docs/wiki/node.js-api#stats
    context: path.resolve(__dirname, '../'),
    hash: false,
    version: false,
    timings: true,
    assets: true,
    entrypoints: true,
    chunks: true,
    chunkModules: true,
    chunkOrigins: true,
    modules: false,
    cached: false,
    children: true,
    warnings: true,
    errorDetails: true,
    reasons: false,
    usedExports: true,
    providedExports: true,
    colors: true,
    source: false,
  },
  historyApiFallback: true,
  contentBase: 'public',
  compress: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}).listen(port, ip, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://${ip}:${port}`)
})
