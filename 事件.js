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

// 事件委托
// 把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托
