// 查看是否为 Ajax 请求
// chrome -> Network -> XHR 是 Ajax 请求


// log
var log = function() {
    console.log.apply(console, arguments)
}

// 函数执行遇到 return 就结束
var minus = function(a, b) {
    return a - b
    log('这一句是不会被执行的, 因为 return 的时候函数就结束了')
}

// 严格相等
1 === '1'
// false
1 === '1'
// true

// 字符串替换
// '.1.2.3'.split('.').join('#')
var replaceStr = function(replace, startStr, endStr) {
    if (typeof(replace) == 'string') {
        var after = replace.split(startStr).join(endStr)
    } else {
        console.log('ERROR: 要替换的第一个参数不是字符串')
    }

    return after
}

// 数组
// 末尾添加新元素
a.push('新元素')

// 字符串/数组 切片
// s.slice(开始下标, 结束下标)
s.slice(0, 3)  // 'iam'
s.slice(1, 3)  // 'am'
// 省略下标参数意思是取到底
s.slice(2)   // 'mgood'


/***************** 测试套路 *******************/
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}
var testMin = function() {
    ensure(min([1, 2, 3]) == 1, '123 is not 1')
}
