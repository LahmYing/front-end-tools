// 查看是否为 Ajax 请求
// chrome -> Network -> XHR 是 Ajax 请求

// 字符串替换
// '.1.2.3'.split('.').join('#')
var replaceStr = function (replace, startStr, endStr) {
    if(typeof(replace) == 'string'){
        var after = replace.split(startStr).join(endStr)
    }else {
        console.log('ERROR: 要替换的第一个参数不是字符串')
    }

    return after
}

// 清空 div
var clearDiv = function (div) {
    div.innerHTML = ''
}

// 返回页面中第一个 flag 标识的 html 元素，如 <div id='s'>...</div>
var firstDiv = function (flag){
    return document.querySelector(flag)
}

// 返回页面中所有 flag 标识的 html 元素，如 <div id='s'>...</div>
var allDiv = function (flag) {
    return document.querySelectorAll(flag)
}

// log
// var log = function(arguments){ // 不需要 arguments
var log = function(){
    console.log.apply(console, arguments)
}

// 将 html 添加到 element 的最后
// element,html 都是 html 元素
var addToPageDiv = function (element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

// 监听，element 元素 监听 eventName 事件，如 'click'
var bindEvent = function (element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// 元素 开关 类名为 className 的 class
var toggleClass = function (element, className) {
    // log('toggleClass====', element.classList.contains(className))
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
    // log('element.classList====', element.classList.contains(className))
}

// 移除 所有元素的某个 class
var removeClassAll = function (className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

// 给所有元素绑定某个事件
// selector
var bindAll = function (selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
var find = function (element, selector) {
    return element.querySelector(selector)
}
