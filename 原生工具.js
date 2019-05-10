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
1 == '1'
// true


/***************** 字符串/数组 操作 *******************/
// 字符串可看作数组的一种进行操作

// 字符串替换
// replaceStr('.1.2.3', '.', '**') // '.1.2.3' → "**1**2**3"
var replaceStr = function(str, before, after) {
    if (typeof(str) == 'string') {
        var afterReplace = str.split(before).join(after)
    } else {
        console.log('ERROR: 要替换的第一个参数不是字符串')
    }

    return afterReplace
}

// 数组
// 末尾添加新元素
a.push('新元素')

// 切片
// s.slice(开始下标, 结束下标)
s.slice(0, 3)
s.slice(1, 3)
// 省略下标参数意思是取到底
s.slice(2)


/***************** 测试套路 *******************/
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}
var testMin = function() {
    ensure(min([1, 2, 3]) == 1, '123 is not 1')
}
