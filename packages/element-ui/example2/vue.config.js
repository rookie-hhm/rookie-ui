module.exports = {
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      minimize: true // 此项不能设置为false，否者是导致 tree shaking 失效
    }
  }
}
