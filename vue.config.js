// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/prefix': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '^/prefix': ''
        }
      }
    },
  }
}