'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  // 配置在.vue文件中的css相关处理规则
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    // 是否将单独的css文件（一般为引入的外部文件）进行提取单独打包
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  // 缓存破坏
  cacheBusting: config.dev.cacheBusting, 
  // 转化请求的内容，video、source、img、image等的属性进行配置
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
// 具体的还是需要去了解vue-loader这个webpack的loader加载器
