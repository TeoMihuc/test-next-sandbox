/** @type {import('next').NextConfig} */
module.exports = {
   webpackDevMiddleware: config => {
       config.watchOptions = {
         poll: 1000,
         ignored: /app/node_modules/,
       }
       return config
  },
}
