const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      minimize: true, // 此项不能设置为false，否者是导致 tree shaking 失效
      sideEffects: false
    }
  },
  chainWebpack: config => {
    config.module.rule('compile')
      .test(/\.(m|j)s$/)
      .include
      .add(resolve('src'))
      .add('/node_modules/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ]
      });
  }
}