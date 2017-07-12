/* eslint-disable */
const path = require('path');

const webpack = require('webpack');
const express = require('express');
const serveStatic = require('serve-static');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require("connect-history-api-fallback");

const topPath = process.cwd();
const staticPath = path.resolve(process.cwd(), './packages/app/public/');

// read config

const ip = process.env.IP || '0.0.0.0'
const port = process.env.ASSETS_PORT || 3001

const webpackConfig = require('./webpack.config')

// init server (use express since the webpack middleware works on that)

const app = express();
const compiler = webpack(webpackConfig);

// route anything webpack or static dir doesn't handle via index file
app.use(historyApiFallback(null));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (!req.url.match(/^\/(__webpack_hmr|res\/|.*?\.(js|json|css|jpg|gif|png)$)/)) {
    req.url = '/';
  }
  next();
});

// webpack bindings
const pn = 'verbose'; // none, errors-only, minimal, normal, verbose
app.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: webpackConfig.output.publicPath,
  historyApiFallback: true,
  stats: {
    // @see https://github.com/webpack/docs/wiki/node.js-api#stats
    context: topPath,
    hash: false,
    version: false,
    timings: true,
    assets: true,
    entrypoints: pn === "verbose",
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
}));

app.use(hotMiddleware(compiler));

// pass through anything from the bundle dir directly
app.use(serveStatic(staticPath, {
  'index': false,
}));


// start!

app.listen(port, ip, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at http://${ip}:${port}`)
});
