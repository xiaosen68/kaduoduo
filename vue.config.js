// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/prefix': {
        target: 'http://localhost:8081',
		 // target: 'http://47.96.91.58:8088/huqing',
        pathRewrite: {
          '^/prefix': ''
        }
      }
    },
  }
}