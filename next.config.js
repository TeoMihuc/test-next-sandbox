/** @type {import('next').NextConfig} */
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 2000,
      aggregateTimeout: 200,
    }
    return config
  },
  reactStrictMode: true,
};
