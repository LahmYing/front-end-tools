// https://blog.csdn.net/xiaoxiaoluckylucky/article/details/86067699
//此文件是webpack的基本项目配置文件
'use strict'
//导入path
const path = require('path')
//导入utils.js
const utils = require('./utils')
//导入config文件夹的index.js
const config = require('../config')
//导入vue-loader.conf
const vueLoaderConfig = require('./vue-loader.conf')

//封装函数返回dir的和..和其绝对路径用\拼接的路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

//导出
module.exports = {
  context: path.resolve(__dirname, '../'),
  //入口文件 多入口在这里添加
  entry: {
    app: './src/main.js'
  },
  //输出的文件
  output: {
    //文件路径
    path: config.build.assetsRoot,
    //文件名
    filename: '[name].js',
    //静态资源路径 根据环境来改变
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  //对模块进行解析
  resolve: {
    //对模块的后缀进行解析 比如导入index 没有写后缀名 那么会自动先匹配.js>.vue>.json后缀文件
    extensions: ['.js', '.vue', '.json'],
    //别名 意思是在a文件下很深目录下要引入b文件下的某个很深目录的文件时 写相对路径很麻烦 使用别名方便
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  //解析不同的模块
  module: {
    rules: [
      {
        //解析.vue后缀的文件
        test: /\.vue$/,
        //用vue-loader去解析.vue后缀的文件
        loader: 'vue-loader',
        //对解析文件的参数配置
        options: vueLoaderConfig
      },
      {
        //解析后缀.js的文件
        test: /\.js$/,
        //用babel-loader去解析.js后缀的文件
        loader: 'babel-loader',
        //解析的包含的文件路径
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        //解析图片
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        //用url-loader去解析图片资源
        loader: 'url-loader',
        options: {
          //限制在10000以内
          limit: 10000,
          //对输出的内容进行地址转换
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        //解析视频音频
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        //用url-loader去解析视频音频文件
        loade: 'url-loader',
        options: {
          //限制在10000以内
          limit: 10000,
          //对输出的内容进行地址转换
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    //阻止webpack注入无用的setImmediate polyfill
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}