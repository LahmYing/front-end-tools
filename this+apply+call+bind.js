/************************************
this + 它的3个关联函数 apply call bind
************************************/
/*
this 是在程序运行的时候才能确定的
谁调用了函数谁就是 this
*/
// 1
var greeting = function() {
    // 注意, 这个 this.name 取决于谁调用了 greeting() 函数
    console.log('Hi, ', this.name)
}
var o1 = {
    name: 'gw',
}
var o2 = {
    name: 'xc',
}
// 让 o1 o2 分别调用
o1.hello = function() {
    // 注意, 这个 this.name 取决于谁调用了 greeting() 函数
    console.log('Hi, ', this.name)
}
o2.hello = function() {
    // 注意, 这个 this.name 取决于谁调用了 greeting() 函数
    console.log('Hi, ', this.name)
}
// 调用者就是函数前面的 . 左边的对象
o1.hello() // 调用者是 o1
o2.hello() // 调用者是 o2


// 2
// 直接调用 greeting() 函数的话
// 调用者是全局对象
// 浏览器的全局对象是 window
// node.js 中全局对象是 global
// 所以在浏览器中直接调用 greeting() 的话, this 指的是 window
greeting() // 调用者是 window


/*
apply call bind 是用来给函数指定 this 用的
但是用法稍有区别, 以我们长久以来使用的 log 为例
*/
var log = function() {
    // log 是一个函数
    // js 中的函数是一个对象
    // 所以函数可以有方法
    // apply, call, bind 都是函数的方法, 用来指定 this
    //
    // apply 接受两个参数
    // 第一个参数是函数里面的 this, 这里指定了是 console,
    // 这样就相当于 console.log
    // 第二个参数是要传给函数的参数列表, 类型是 数组, apply 会把数组
    // 拆成一个个的参数传给函数
    // 假设你调用 log(1, 2, 3, 4)
    // 那么 arguments 是 [1, 2, 3, 4] 这样的一个数组
    // (实际上 arguments 不是数组, 但是表现和数组一模一样
    // 你就暂时当它是一个数组)
    // 下面这句就相当于调用 console.log(1, 2, 3, 4)
    console.log.apply(console, arguments)

    // o1.hello.apply(o2)
    // Hi,  xc
    // 如果 console.log 的 this 只能是 console
    // 那么 log 函数写成 console.log(arguments) 这样行么？

    // call 和 apply 类似, 但是小有区别, 如下
    // 第一个参数和 apply 一样
    // 第 2, 3, 4, 5, ... 个参数会依次作为参数传给函数
    console.log.call(console, 1, 2, 3, 4)
    // 上面和下面一模一样
    console.log.apply(console, [1, 2, 3, 4])
}


/*
bind
*/
// 1
// bind 函数不直接调用, 而是返回一个函数让你来调用
// 第一个参数是用来指定函数里面的 this, 和 apply call 一样
// 用法就是这样, 返回一个指定了 this 的函数
var log = console.log.bind(console)
log('hello', 1, 2, 3)
// hello 1 2 3

// 2
// bind 还可以有额外的参数, 效果如下
// 给返回的函数加上部分参数
var error = console.log.bind(console, '*** ERROR')
// 下面的调用相当于 console.log('*** ERROR', '错误')
error('错误')
// *** ERROR 错误
