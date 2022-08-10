/** @type {import('next').NextConfig} */
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 10000,
      aggregateTimeout: 20,
    }
    return config
  },
}
