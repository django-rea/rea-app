// :TODO: I am pretty sure the same filter/path/parser logic should be used for production too.
// If you encounter "asset not found" errors try changing this for a start!

const plugin = require('webpack-isomorphic-tools/plugin')

const config = {
  webpack_assets_file_path: 'webpack/webpack-assets.json',
  assets: {
    images: {
      extensions: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
      parser: plugin.url_loader_parser
    },
    fonts: {
      extensions: ['woff', 'woff2', 'ttf', 'eot'],
      parser: plugin.url_loader_parser
    },
    yaml_files: {
      extension: 'yaml',
    },
    style_modules: {
      extensions: ['less', 'scss', 'css'],
      filter(module, regex, options, log) {
        return options.development
          ? plugin.style_loader_filter(module, regex, options, log)
          : regex.test(module.name)
      },
      path(module, options, log) {
        return options.development
          ? plugin.style_loader_path_extractor(module, options, log)
          : module.name
      },
      parser(module, options, log) {
        return options.development
          ? plugin.css_modules_loader_parser(module, options, log)
          : module.source
      },
    },
  },
  modulesDirectories: ['node_modules'],
  patch_require: true,
}

module.exports = config
