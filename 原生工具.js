// 查看是否为 Ajax 请求
// chrome -> Network -> XHR 是 Ajax 请求


// 测试套路
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}
var testMin = function() {
    ensure(min([1, 2, 3]) == 1, '123 is not 1')
}


// 函数执行遇到 return 就结束
var minus = function(a, b) {
    return a - b
    log('这一句是不会被执行的, 因为 return 的时候函数就结束了')
}

// 严格相等
// 1 === '1'
// false
// 1 === '1'
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
// a.push('新元素')

// 字符串/数组 切片
// s.slice(开始下标, 结束下标)
// s.slice(0, 3)  // 'iam'
// s.slice(1, 3)  // 'am'
// 省略下标参数意思是取到底
// s.slice(2)   // 'mgood'

// 清空 div
var clearDiv = function(div) {
    div.innerHTML = ''
}

// 返回 html 第一个 div
// 元素选择器: firstDiv('body')
// class 选择器: firstDiv('.login-form')
// id 选择器: firstDiv('#id-button-login')
var firstDiv = function(flag) {
    return document.querySelector(flag)
}

// 返回所有 div
var allDiv = function(flag) {
    return document.querySelectorAll(flag)
}

// log
var log = function() {
    console.log.apply(console, arguments)
}

// 插入 div
// 将 html 添加到 element 的最后
var addToPageDiv = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

// 绑定事件
// element div 监听 eventName 事件，如 'click'
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}
// 给所有 div 绑定某个事件
var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// div 翻转 类
var toggleClass = function(element, className) {
    // log('toggleClass====', element.classList.contains(className))
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
    // log('element.classList====', element.classList.contains(className))
}

// 移除 所有 div 的某个 class
var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}


// 查找 子 div
// find 函数可以查找 element 的所有子 div
var find = function(element, selector) {
    return element.querySelector(selector)
}
