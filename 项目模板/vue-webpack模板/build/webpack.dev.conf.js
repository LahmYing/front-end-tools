// https://blog.csdn.net/xiaoxiaoluckylucky/article/details/86140433
//此文件是开发环境下webpack相关配置
'use strict'
//导入utils.js
const utils = require('./utils')
//导入webpack
const webpack = require('webpack')
//导入config文件夹下的index.js
const config = require('../config')
//导入webpackage-merge 用来合并对象 去掉重复的属性
const merge = require('webpack-merge')
//导入path
const path = require('path')
//导入webpack.base.conf.js
const baseWebpackConfig = require('./webpack.base.conf')
//导入copy-webpack-plugin 用来复制
const CopyWebpackPlugin = require('copy-webpack-plugin')
//导入html-webpack-plugin 用来自动生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')
//导入friendily-errors-webpack-plugin 用来收集和展示错误日志
const FriendlyErrorsPlugin = require('friendily-errors-webpack-plugin')
//导入portfinder 用来获取port
const portfinder = require('portfinder')

//主机
const HOST = process.env.HOST
//端口
const PORT = process.env.PORT && Number(process.env.PORT)

//合并
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    //解析样式文件的规则
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  //开发工具 用来调试
  devtool: config.dev.devtool,
  //服务器 如需要请求本地数据时  需要在此块添加其他配置
  devServer: {
    //重新加载server,控制台以warning方式提示错误
    clientLogLevel: 'warning',
    //HTML5 history api时,任意的404可能需要被替代为index.html
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }
      ]
    },
    //启用热替换
    hot: true,
    //告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要，这里是禁用
    contentBase: false,
    //是否压缩
    compress: true,
    //主机
    host: HOST || config.dev.host,
    //端口
    port: PORT || config.dev.port,
    //是否自动打开浏览器
    open: config.dev.autoOpenBrowser,
    //编译出错时是否有提示
    overlay: config.dev.errorsOverlay ? { warning: false, errors: true } : false,
    //静态资源路径 此路径可在浏览器中打开
    publicPath: config.dev.assetsPublicPath,
    //代理
    proxy: config.dev.proxyTable,
    //启用quiet 意思是除了启动信息以外的任何信息都不会打印在控制台
    quiet: ture,
    //监视文件的选项
    watchOptions: {
      poll: config.dev.poll
    }
  },
  plugins: [
    //自定义一个plugin 生成当前环境的一个变量
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    //模块热替换插件 修改模块时不需要刷新页面
    new webpack.HotModuleReplacementPlugin(),
    //当开启HMR的时候使用该插件会显示模块的相对路径
    new webpack.NamedModulesPlugin(),
    //在编译出错时 使用NoEmitOnErrorsPlugin来跳过输出阶段 确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin(),
    //自动生成html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    //复制静态资源到开发环境的路径
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

//导出
module.exports = new Promise((resolve, reject) => {
  //获取basePort
  portfinder.basePort = process.env.PORT || config.dev.port
  //端口配置
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      //添加友好提示
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        //编译成功提示
        compilationSuccessInfo: {
          //提示运行的主机和端口
          messages: [`Your applicatiion is running here: http://${devWebpackConfig.devServer.host}:${port}`]
        },
        //错误提示
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})