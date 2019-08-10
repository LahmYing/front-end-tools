// 先上结论
// var 的 创建 、初始化会被提升，赋值不会
// let 的 创建会被提升， 初始化、赋值不会
// const 只有创建会被提升， 初始化不会，没有赋值这一过程


console.log(x);
const x = 'x'
// ReferenceError: can't access lexical declaration `x' before initialization
// 初始化前无法访问词汇声明“x” 


console.log(y);
let y = 'y'
// ReferenceError: can't access lexical declaration `y2' before initialization
// 所谓暂时死区，就是不能在初始化之前，使用变量
>> y  // 控制台中继续输入 y
// 输出 undefined， 说明上面两行代码 -> 留下 let y，然后就被初始化为 undefined 了


console.log(z);  // undefined,即 z 被初始化为 undefined
var z = 'z'
console.log(z);  // z