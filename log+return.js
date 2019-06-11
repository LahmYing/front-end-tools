
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
// 1 === '1'
// false
// 1 == '1'
// true
