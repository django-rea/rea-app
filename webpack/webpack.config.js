const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')

const ip = process.env.IP || '0.0.0.0'
const port = (+process.env.PORT + 1) || 3001
const DEBUG = process.env.NODE_ENV !== 'production'
const PUBLIC_PATH = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const isVendor = ({ userRequest }) => (
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.match(/\.js$/)
)

const config = {
  devtool: DEBUG ? 'eval-source-map' : false,
  entry: {
    app: ['babel-polyfill', path.join(__dirname, '../src/client')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: DEBUG ? `http://${ip}:${port}/` : PUBLIC_PATH,
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: (webpack) => {
          return [
            require("postcss-import")({ addDependencyTo: webpack }),
            require("postcss-url")(),
            require("postcss-cssnext")(),
            // add your "plugins" here
            // ...
            // and if you want to compress,
            // just use css-loader option that already use cssnano under the hood
            require("postcss-browser-reporter")(),
            require("postcss-reporter")(),
          ]
        },
      },
    }),
    new ExtractTextPlugin('app.css'),
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.png$/, loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url-loader?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader?prefix=fonts/' },
      { test: /\.eot$/, loader: 'file-loader?prefix=fonts/' },
      { test: /\.svg$/, loader: 'babel-loader?presets[]=es2015,presets[]=react!svg-react-loader' },   // load SVG directly as React components
      { test: /\.yaml$/, loader: 'json-loader!yaml-loader' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&sourceMap!postcss-loader?sourceMap&sourceComments',
        }),
      },
    ],
  },
}

if (DEBUG) {
  config.entry.app.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
  ])
} else {
  config.output.filename = '[name].[chunkHash].js'

  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
  ])
}

module.exports = config
