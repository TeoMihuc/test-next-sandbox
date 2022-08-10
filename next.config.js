/** @type {import('next').NextConfig} */
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 2,
      aggregateTimeout: 2,
    }
    return config
  },
}
