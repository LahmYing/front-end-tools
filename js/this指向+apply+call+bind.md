```js
// apply 和 call 的区别
// 后面参数形式不一样而已
someFunc.apply(context, [1, 2, 3, 4])
someFunc.call(context, 1, 2, 3, 4)

// bind 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数
// function.bind(thisArg[, arg1[, arg2[, ...]]])
someFunc.bind(context, 1, 2, 3, 4)

// this 指向见 https://github.com/LahmYing/front-end-tools/issues/7


// 箭头函数的 this 指向等同于 词法作用域的上下文
```