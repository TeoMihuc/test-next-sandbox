/** @type {import('next').NextConfig} */
module.exports = {
   webpackDevMiddleware: config => {
       config.watchOptions = {
         poll: 1000,
       }
       return config
  },
}
