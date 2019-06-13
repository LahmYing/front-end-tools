/******************
最佳方案 async/await
*******************/
// 一个函数如果加上 async ，那么该函数就会返回一个 Promise
async function async1() {
  return "1"
}
console.log(async1()) // -> Promise {<resolved>: "1"}

// 并发请求
let fs = require('fs')
function read(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}
function readAll() {
  read1()
  read2()//这个函数同步执行
}
async function read1() {
  let r = await read('1.txt','utf8')
  console.log(r)
}
async function read2() {
  let r = await read('2.txt','utf8')
  console.log(r)
}
readAll() // 2.txt 3.txt




/******************
其他方案
*******************/
// https://github.com/ljianshu/Blog/issues/53




/******************
总结
*******************/
1.JS 异步编程进化史：callback -> promise -> generator -> async + await

2.async/await 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。

3.async/await可以说是异步终极解决方案了。
(1) async/await函数相对于Promise，优势体现在：
  // 处理 then 的调用链，能够更清晰准确的写出代码
  // 并且也能优雅地解决回调地狱问题。

  当然async/await函数也存在一些缺点，因为 await 将异步代码改造成了同步代码，
  // 如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。

(2) async/await函数对 Generator 函数的改进，体现在以下三点：
  内置执行器。
  // Generator 函数的执行必须靠执行器，所以才有了 co 函数库，而 async 函数自带执行器。也就是说，async 函数的执行，与普通函数一模一样，只要一行。
  更广的适用性。
  // co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
  更好的语义。
  // async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。
