## 搭建 webpack 模板 & 记录
### 选取 vue-webpack 模板
> https://github.com/vuejs-templates/webpack
### 搭建命令
> https://cli.vuejs.org/zh/guide/creating-a-project.html#%E6%8B%89%E5%8F%96-2-x-%E6%A8%A1%E6%9D%BF-%E6%97%A7%E7%89%88%E6%9C%AC
> https://github.com/vuejs-templates/webpack#usage
### ts 支持
> https://cn.vuejs.org/v2/guide/typescript.html
### ts 配置
> https://www.typescriptlang.org/docs/handbook/compiler-options.html
### 提交规范
.commitlintrc.js

## build 文件夹详情
### build.js
```js
// no change compare to company template 
'use strict'
// 检查node和npm的版本
require('./check-versions')()

process.env.NODE_ENV = 'production'
// 引入ora模块，可以在控制台显示编译信息
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
// 可以配置编译信息在控制台的显示样式
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
// 开始显示编译信息
spinner.start()
// 清空静态资源的二级目录下所有内容
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    // 停止编译信息的显示
    spinner.stop()
    if (err) throw err
    // 配置编译信息的显示样式
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

```

### check-versions.js
```js
// no change compare to company template
'use strict'
// 定制控制台日志的输入样式
const chalk = require('chalk')
// 加载语义化版本测试库
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec (cmd) {
  // require('child_process')调用 nodejs 子进程，
  // execSync 同步的 exec 方法执行 command
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    // semver.clean 格式化版本号，如 ‘v7.1.0’ => '7.1.0'
    // currentVersion 取 node 版本
    currentVersion: semver.clean(process.version),
    // 从package.json读取node版本要求
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    // 判断现有版本是否满足要求
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    // 按照linux的规范，一般成功用0表示，而非0则表示失败。存在不满足版本要求的模块，执行失败
    process.exit(1)
  }
}

```

### utils.js
```js
'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

// 设置静态文件的公共路径，用于修改src属性的值（通常用于某个loader的options）
exports.assetsPath = function (_path) {
  // 根据不同的环境到对公共路径进行配置并与传入的文件名称进行合并
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  // path.posix是处理跨操作系统
  return path.posix.join(assetsSubDirectory, _path)
}

// css加载器的相关配置
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      // 根据不同的环境配置是否要对css文件进行压缩
      // minimize: process.env.NODE_ENV === 'production', // 此为旧版本配置，当前版本无此句
      // 根据传入的配置决定是否生成sourceMap用于调试bug
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // 用于配置css或css预处理器文件
  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    // 如less、sass、stylus等
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        // 创建一个空对象，将css加载器初始配置与该预处理器的特殊配置进行合并
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // 是否将入口文件（main.js）中引入的css文件一起打包进该文件的css中
    // 根据传入的 options.extract 的值进行判断（一般在生产环境中会去单独打包）
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// 对.vue文件之外的css文件或css预处理器文件进行处理
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  // 循环cssLoaders返回出来的所有文件类型
  for (const extension in loaders) {
    const loader = loaders[extension]
    // 对每一个文件类型用其相对应的加载器进行处理
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  // 发送桌面消息
  const notifier = require('node-notifier') // 原生的操作系统上发送通知的nodeJS模块

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
```

### vue-loader.conf.js
```js
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
```

### webpack.base.conf.js
```js
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
```

### webpack.dev.conf.js
```js
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
```

### webpack.prod.conf.js
```js
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
```

### webpack.test.conf.js
```js
'use strict'
// This is the webpack config used for unit tests.

const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      // 指定环境为测试环境  test.env中设置了NODE_ENV=‘testing’
      'process.env': require('../config/test.env')
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
```