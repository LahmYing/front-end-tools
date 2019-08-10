// import 命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行
// import 和 export 命令只能在模块的顶层，不能在代码块之中（比如，在 if 代码块之中，或在函数之中）
// 报错
if (x === 2) {
  import MyModual from './myModual';
}


// require 是运行时加载模块，import 命令无法取代 require 的动态加载功能
const path = './' + fileName;
const myModual = require(path);
