const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const assetPort = process.env.ASSETS_PORT || 3001
const basename = `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: process.env.WEB_BASEURL || `http://${ip}:${port}${basename}`,
    assetUrl: process.env.ASSET_BASEURL || `http://${ip}:${assetPort}${basename}`,
    basename,
    browser,
    ip,
    port,
  },
  test: {},
  development: {},
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: process.env.WEB_BASEURL,
    assetUrl: process.env.ASSET_BASEURL,
  },
}

const conf = Object.assign({}, config.all, config[config.all.env])

export = conf
