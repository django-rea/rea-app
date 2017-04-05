const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const loaderUtils = require('loader-utils')
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

// babel needs different (minimal) loader chain configured to load SVGs correctly
const svgLoaderPlugins = 'plugins[]=' + ([
  'transform-remove-strict-mode',
  'transform-es2015-modules-commonjs',
  'transform-es2015-classes',
  'transform-es2015-destructuring',
  'transform-react-jsx',
  'syntax-jsx',
].join(',plugins[]='))

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
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8000/api/graph'),
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: (webpack) => {
          return {
            plugins: [
              require("postcss-import")({ addDependencyTo: webpack }),
              require("postcss-url")(),
              require("postcss-cssnext")(),
              // add your "plugins" here
              // ...
              require('postcss-strip-inline-comments')(),
              require('postcss-discard-comments')(),
              // and if you want to compress,
              // just use css-loader option that already use cssnano under the hood
              require("postcss-browser-reporter")(),
              require("postcss-reporter")(),
            ],
            syntax: require('postcss-scss'),
          }
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
      { test: /\.svg$/, loader: `babel-loader?${svgLoaderPlugins}!react-svg-loader` },   // load SVG directly as React components
      { test: /\.yaml$/, loader: 'json-loader!yaml-loader' },
    ],
  },
}

const styleLoaders = [{
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 1,
    getLocalIdent: (context, localIdentName, localName, options) =>
      loaderUtils.interpolateName(
        context,
        `c[hash:base64:5]`,
        { content: `${options.hashPrefix}${context.resourcePath}+${localName}` }
      ),
  },
}, {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
  },
}]

if (DEBUG) {
  config.entry.app.unshift(
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://${ip}:${port}/__webpack_hmr`
  )

  config.plugins = config.plugins.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig).development(),
  ])

  // :IMPORTANT: this must be the last rule! @see webpack-dev-server.js
  config.module.rules.push({
    test: /\.css$/,
    // loader: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader?sourceMap&sourceComments',
    use: [{
      loader: 'style-loader',
    }].concat(styleLoaders),
  })
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

  // :IMPORTANT: this must be the last rule! @see webpack-dev-server.js
  config.module.rules.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: styleLoaders,
    }),
  })
}

module.exports = config
