// import 命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行
// import 和 export 命令只能在模块的顶层，不能在代码块之中（比如，在 if 代码块之中，或在函数之中）
// 报错
if (x === 2) {
  import MyModual from './myModual';
}
// 总结
// 1.静态解析
// 即在解析阶段就确定输出的模块，所以es6模块的import一般写在被引入文件的开头。
// 2.模块不是对象
// 在es6里，每个模块并不会当做一个对象看待
// 3.加载的不是整个模块
// 在es6模块中经常会看见一个模块中有好几个export 导出
// 4.模块的引用
// es6模块中，导出的并不是模块的值拷贝，而是这个模块的引用


// require 是运行时加载模块，import 命令无法取代 require 的动态加载功能
const path = './' + fileName;
const myModual = require(path);
// 总结
// 1.动态加载模块
// commonJS和es6的最大区别大概就在于此了吧，commonJS模块的动态加载能够很轻松的实现懒加载，优化用户体验。
// 2.加载整个模块
// commonJS模块中，导出的是整个模块。
// 3.每个模块皆为对象
// commonJS模块都被视作一个对象。
// 4.值拷贝
// commonJS的模块输出和 函数的值传递相似，都是值的拷贝


for (var index = 0; index < 10; index++) {
  // const element = array[index];
  
}
console.log(index);
