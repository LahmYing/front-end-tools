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

// 创建 div
var button = document.createElement('button');
// div 里的内容
button.innerHTML = '注册用户'


// 添加子 div
div.appendChild(button)

// 删除 div
// 自毁
div.remove()
// 父节点删除子 div
DIV.removeChild(div)


/***************** 操作 div 属性 *******************/
// 属性值
// 注意， getAttribute 只能得到默认值，而不是得到当前的值
div.getAttribute('value')

// 设置属性值
div.setAttribute('value', '新用户名')

// 属性是否存在
log(div.hasAttributes())       // 查看元素是否有属性
log(div.hasAttribute('value')) // 查看元素是否有特定属性

// 删除属性
div.removeAttribute('type')

// 获得所有属性
var attributes = div.attributes
