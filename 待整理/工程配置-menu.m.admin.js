/** 
当前项目各工程配置所用方案、工具
招式&作用&怎么用:看文档配配置
要求：
1.知道配置项含义，能配
2.单独某工程工具的深入不如先看vue-loader内建已处理事务的源码（如模板预编译、响应性）
*/
打包模板  // webpack模板(还有个 webpack-simple )
版本检查 // build/check-version.js
// build/dev-sever
多CSS - loader集中处理  // build/untils  
框架loader处理  // build/vue-loader

开发 / 生产 / 测试环境配置  // config/；config/index.js 可看到前端数据来源的域名（包括本地运行时）
打包输出目录  // dist/
自动化部署工具  // mandy by zzetao
国际化  // @/i18n 
单元测试  // test/unit
自动化测试 // test/e2e ；模拟用户操作打开浏览器、点击等)
提交规范
编辑器设定 // editorconfig
eslintignore
格式化  // eslint 
自动补全浏览器前缀 // postcssrc.js 里的插件 
ts设置 // tsconfig.json
桥接原生接口 // dsbrige, at @/lib/native
// @/lib/decimal 等，定义其他功能如四则运算等，以 Vue 构造器属性的方式
// @/lib/index, url 的 ？& 等
// @/lib/scroll, 滚动

// static/.gitkeep // github 不允许空文件夹







