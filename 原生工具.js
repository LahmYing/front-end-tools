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


/***************** 测试套路 *******************/
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}
var testMin = function() {
    ensure(min([1, 2, 3]) == 1, '123 is not 1')
}


/***************** 事件 *******************/
// 绑定事件
// div 监听 eventName 事件，如 'click'
var bindEvent = function(div, eventName, callback) {
    div.addEventListener(eventName, callback)
}

// 给所有 div 绑定某个事件
var bindAll = function(selector, eventName, callback) {
    var divs = document.querySelectorAll(selector)
    for (var i = 0; i < divs.length; i++) {
        var e = divs[i]
        bindEvent(e, eventName, callback)
    }
}


/***************** div 操作 *******************/
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

// 末尾插入 div
var addToPageDiv = function(div, html) {
    div.insertAdjacentHTML('beforeend', html)
}

// div 翻转 类
var toggleClass = function(div, className) {
    // log('toggleClass====', div.classList.contains(className))
    if (div.classList.contains(className)) {
        div.classList.remove(className)
    } else {
        div.classList.add(className)
    }
    // log('div.classList====', div.classList.contains(className))
}

// 移除 所有 div 的某个 class
var removeClassAll = function(className) {
    var selector = '.' + className
    var divs = document.querySelectorAll(selector)
    for (var i = 0; i < divs.length; i++) {
        var e = divs[i]
        e.classList.remove(className)
    }
}

// 查找 子 div
// find 函数可以查找 div 的所有子 div
var find = function(div, selector) {
    return div.querySelector(selector)
}


/***************** 操作 div 属性 *******************/
// 属性值
// 注意， getAttribute 只能得到默认值，而不是得到当前的值
// div.getAttribute('value')

// 设置属性值
// div.setAttribute('value', '新用户名')

// 属性是否存在
// log(div.hasAttributes())       // 查看元素是否有属性
// log(div.hasAttribute('value')) // 查看元素是否有特定属性

// 删除属性
// div.removeAttribute('type')

// 获得所有属性
// var attributes = div.attributes
