const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const loaderUtils = require('loader-utils')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')

const ip = process.env.IP || '0.0.0.0'
const port = process.env.ASSETS_PORT || 3001
const DEBUG = process.env.NODE_ENV !== 'production'
const PUBLIC_PATH = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const isVendor = ({ userRequest }) => (
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.indexOf('@vflows') === -1 &&
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
    app: ['babel-polyfill', path.join(__dirname, '../client')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: DEBUG ? `http://${ip}:${port}/` : PUBLIC_PATH,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
      'process.env.WEB_BASEURL': JSON.stringify(process.env.WEB_BASEURL),
      'process.env.ASSET_BASEURL': JSON.stringify(process.env.ASSET_BASEURL),
      'process.env.IP': JSON.stringify(process.env.IP),
      'process.env.PORT': JSON.stringify(process.env.PORT),
      'process.env.ASSETS_PORT': JSON.stringify(process.env.ASSETS_PORT),
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8000/api/graph'),
    }),
    new ExtractTextPlugin('app.css'),
  ],
  module: {
    rules: [
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

const styleLoaders = (cssMode) => [{
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
}, cssMode
? false
: {
  loader: 'resolve-url-loader'
},
cssMode
// W3C CSS preprocessing pipeline
? {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
    plugins: (loader) => [
      require('postcss-import')({ root: loader.resourcePath }),
      require("postcss-url")(),
      // require("postcss-cssnext")(), (not ready for postCSS 6, so injecting manually...)
        require("postcss-custom-properties")(),
        require("postcss-apply")(),
        require("postcss-calc")(),
        require("postcss-image-set-polyfill")(),
        require("postcss-nesting")(),
        require("postcss-custom-media")(),
        require("postcss-media-minmax")(),
        require("postcss-custom-selectors")(),
        require("postcss-attribute-case-insensitive")(),
        require("postcss-color-rebeccapurple")(),
        require("postcss-color-hwb")(),
        require("postcss-color-hsl")(),
        require("postcss-color-rgb")(),
        require("postcss-color-gray")(),
        require("postcss-color-hex-alpha")(),
        require("postcss-color-function")(),
        require("postcss-font-family-system-ui")(),
        require("postcss-font-variant")(),
        require("pleeease-filters")(),
        require("postcss-initial")(),
        require("pixrem")(),
        require("postcss-pseudoelements")(),
        require("postcss-selector-matches")(),
        require("postcss-selector-not")(),
        require("postcss-pseudo-class-any-link")(),
        require("postcss-color-rgba-fallback")(),
        require("postcss-replace-overflow-wrap")(),
        require("autoprefixer")(),
      // end cssnext ...
      require('postcss-strip-inline-comments')(),
      require('postcss-discard-comments')(),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ],
    syntax: 'postcss-scss',
  },
}
// SCSS preprocessing pipeline
: {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
  },
}].filter(i => !!i)

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
    }].concat(styleLoaders(true)),
  })
  config.module.rules.push({
    test: /\.scss$/,
    // loader: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader?sourceMap&sourceComments',
    use: [{
      loader: 'style-loader',
    }].concat(styleLoaders(false)),
  })
} else {
  config.output.filename = '[name].[chunkHash].js'

  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
    new WebpackMd5Hash(),
    // new UglifyJSPlugin({ compress: { warnings: false } }),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
  ])

  // :IMPORTANT: this must be the last rule! @see webpack-dev-server.js
  config.module.rules.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: styleLoaders(true),
    }),
  })
  config.module.rules.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: styleLoaders(false),
    }),
  })
}

module.exports = config
