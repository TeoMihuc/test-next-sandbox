/** @type {import('next').NextConfig} */
module.exports = {
   webpackDevMiddleware: config => {
       config.watchOptions = {
          aggregateTimeout: 200,
          poll: 1000,
          ignored: '/app/node_modules/',
       }
       return config
  },
}
