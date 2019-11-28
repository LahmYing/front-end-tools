// https://blog.csdn.net/xiaoxiaoluckylucky/article/details/86161027
//此文件是生产环境下webpack相关配置
'use strict'
//导入path
const path = require('path')
//导入utils
const utils = require('./utils')
//导入webpack
const webpack = require('webpack')
//导入config文件夹下的index.js
const config = require('../config')
//导入webpack-merger 用来合并对象 去掉重复属性
const merge = require('webpack-merge')
//导入webpack.base.conf.js
const baseWebpackConfig = require('./webpack.base.conf')
//导入copy-webpack-plugin 用来复制
const CopyWebpackPlugin = require('copy-webpack-plugin')
//导入html-webpack-plugin 用来自动生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')
//导入extract-text-webpack-plugin 用来抽离css 防止css打包压缩到js中
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//导入optimize-css-assets-webpack-plugin 用来压缩单独的css文件
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
//导入uglifyjs-webpack-plugin 用来压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//导入prod.env.js 用来区分是生产环境
const env = require('../config/prod.env')
//合并
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    //配置独立的css文件的解析规则
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      //生成独立的文件
      extract: true,
      usePostCSS: true
    })
  },
  //开发工具 用来调试
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  //输出
  output: {
    //打包后的文件放在dist目录下面
    path: config.build.assetsRoot,
    //编译生成的js文件存放在根目录下的js目录下，如果js文件夹不存在就自动创建
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    //用来打包require.ensure方法中引入的模块，如果该方法中没有引入任何模块，就不会生成chunk文件
    chunkFileName: utils.assetsPath('js/[id].[chunkhash].js')
  },
  //配置插件项
  plugins: [
    //自定义一个plugin 生成当前环境下的一个变量
    new webpack.DefinePlugin({
      'process.env': env
    }),
    //压缩
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          //禁止压缩警告信息
          warnings: false
        }
      },
      //是否开启sourceMap 用来调试
      sourceMap: config.build.productionSourceMap,
      //在系统的CPU有多于一个内核时自动启用 仅作用于生产构建
      parallel: true
    }),
    //独立的css文件夹插件
    new ExtractTextPlugin({
      //文件名
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      //是否单独提取
      allChunks: true,
    }),
    //压缩css
    new OptimizeCSSPlugin({
      //文件名
      filename: config.build.index,
      //源模板文件
      template: 'index.html',
      //是否注入 即script标签位于html文件的body底部
      inject: true,
      //压缩配置
      minify: {
        //是否去掉注释
        removeComments: true,
        //是否合并空格
        collapseWhitespace: true,
        //是否去掉属性的引号
        removeAttributeQuotes: true
      },
      //决定script标签的引用顺序 dependency即按照不同文件的依赖关系来排序
      chunksSortMode: 'dependency'
    }),
    //将各模块的id变成hash值
    new webpack.HashedModuleIdsPlugin(),
    //作用于提升
    new webpack.optimize.ModuleConcatenationPlugin(),
    //优化。用来提取第三方库和公共模块到vendor.js，避免首屏添加的bundle文件或者按需加载的bundle文件体积过大。从而导致加载时间过长。
    new webpack.optimize.CommonsChunkPlugin({
      //文件名 会把公共模块代码合并到这个chunk上
      name: 'vendor',
      //遍历 如果该模块时js文件并且在node_modules中 就会加入到vendor中
      minChunks (module) {
        return (
          module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules') === 0)
        )
      }
    }),
    //抽取第三方库到mainfest.js 为了避免每次更改项目代码时导致venderchunk的chunkHash改变
    new webpack.optimize.CommonsChunkPlugin({
      name: 'mainfest',
      //当入口文件(entry chunks)>=3才生效，用来在第三方库中分离自定义的公共模块
      minChunks: Infinity
    }),
    //抽取第三方库到app.js
    new webpack.optimize.CommonsChunkPlugin({
      //文件名
      name: 'app',
      //解决children:true时合并到entry chunks自身时加载时间过长的问题，commons chunk不会合并到自身，而是使用一个新的异步的commons chunk,当这个children chunk被下载时，自动并行下载该commons chunk
      async: 'vendor-async',
      //source chunks是通过entry chunks(入口文件)进行代码分割出来的children chunks
      children: true,
      //模块被3个chunk公共引用才被抽取出来成为commons chunk
      minChunks: 3
    }),
    //复制自定义的静态资源到生产环境
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

//压缩
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      //目标资源名称 [path]会被替换成原始资源的路径 [query]会被替换成查询字符串
      asset: '[path].gz[query]',
      //按照zlib的算法
      algorithm: 'gzip',
      //所有匹配该正则的资源都会被处理 默认值是全部资源
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      //只有大小大于该值得资源会被处理，单位是bytes
      threshold: 10240,
      //压缩率小于这个值得资源才会被处理 默认值是.8
      minRatio: 0.8
    })
  )
}

//打包文件分析工具
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
//导出
module.exports = webpackConfig