/** @type {import('next').NextConfig} */
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 20,
    }
    return config
  },
  reactStrictMode: true,
};
