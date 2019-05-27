// a.js
/*****************
export
*****************/
export var sex = "boy";
export var echo = function(value) {
    console.log(value)
}
//因为function echo(){}等价于 var echo=function(){}所以也可以写成
export function echo2(value) {
    value = value + '-V2'
    console.log(value)
}


/*****************
export default
*****************/
var sex = "boy"
// sex不能加大括号
export default sex
// 原本直接 export sex 外部是无法识别的，加上 default 就可以了.但是一个文件内最多只能有一个 export default。
// 其实此处相当于为 sex 变量值 "boy" 起了一个系统默认的变量名 default
// 自然 default 只能有一个值，所以一个文件内不能有多个 export default。


/*****************
export as
*****************/
var v1 = "v1"
var v2 = "v2"
export {
    v1 as streamV1,
    // 重命名后，v2可以用不同的名字输出两次
    v2 as streamV2,
    v2 as streamLatestVersion
}


/*****************
取到模块内部实时的值
*****************/
// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
// 输出变量foo，值为bar，500 毫秒之后变成baz
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);


/********************************************
export import 需处于模块顶层即 js 文件的最外层
********************************************/
// export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此
// export语句放在函数之中，结果报错
/*
function foo() {
  export default 'bar' // SyntaxError
}
foo()
 */
