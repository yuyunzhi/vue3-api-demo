const publicPath = process.env.NODE_ENV !== 'development' ? '././' : ''
console.log('环境变量 vue.config.js',process.env.NODE_ENV);

module.exports = {
  publicPath,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true
      }
    }
  }
}
